#!/usr/bin/env python3
"""
Automated SEO & Quality Gate Validator (R1 - R27)
Verifies HTML structure, metadata, Schema JSON-LD, sitemap, robots.txt, accessibility, and local assets.
"""

import os
import re
import json
import html
import xml.etree.ElementTree as ET
from urllib.parse import urlparse

WORKSPACE_DIR = os.path.dirname(os.path.abspath(__file__))
ERRORS = []
WARNINGS = []
PASSED = []

def check(name, condition, error_msg, is_warning=False):
    if condition:
        PASSED.append(name)
        print(f"  [PASS] {name}")
    else:
        if is_warning:
            WARNINGS.append(f"{name}: {error_msg}")
            print(f"  [WARN] {name} - {error_msg}")
        else:
            ERRORS.append(f"{name}: {error_msg}")
            print(f"  [FAIL] {name} - {error_msg}")

def test_config_files():
    print("\n--- Testing Phase A Config & Data Artifacts ---")
    files = ["site-profile.json", "seeds.json", "banglish_map.json", "intents.json", "keywords.csv"]
    for f in files:
        path = os.path.join(WORKSPACE_DIR, f)
        check(f"Artifact {f} exists", os.path.exists(path) and os.path.getsize(path) > 0, f"File {f} missing or empty")

def test_html_file(filename, is_home=False):
    print(f"\n--- Testing {filename} ---")
    path = os.path.join(WORKSPACE_DIR, filename)
    if not os.path.exists(path):
        ERRORS.append(f"{filename} does not exist")
        return

    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    # Charset
    check(f"{filename}: Charset UTF-8", 'charset="UTF-8"' in content or 'charset="utf-8"' in content, "Missing UTF-8 charset")

    # Viewport
    check(f"{filename}: Viewport Meta", 'name="viewport"' in content, "Missing viewport meta tag")

    # Title
    title_match = re.search(r"<title>(.*?)</title>", content, re.IGNORECASE | re.DOTALL)
    check(f"{filename}: Title exists", bool(title_match), "Missing <title> tag")
    if title_match:
        raw_title = title_match.group(1).strip()
        title = html.unescape(raw_title)
        check(f"{filename}: Title length (10-70 chars)", 10 <= len(title) <= 70, f"Title length {len(title)} is out of optimal range: '{title}'")
        if is_home:
            expected_title = "Humayoun Kobir | Diploma Engineer & Designer Portfolio"
            check(f"{filename}: Exact Brand Title Match", title == expected_title, f"Expected '{expected_title}', got '{title}'")

    # Meta Description
    desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', content, re.IGNORECASE)
    if not desc_match:
        desc_match = re.search(r'<meta\s+content=["\'](.*?)["\']\s+name=["\']description["\']', content, re.IGNORECASE)
    check(f"{filename}: Meta Description exists", bool(desc_match), "Missing meta description")
    if desc_match:
        desc = desc_match.group(1).strip()
        check(f"{filename}: Meta Description length (50-170 chars)", 50 <= len(desc) <= 170, f"Description length {len(desc)} out of range")

    # Canonical Link
    canonical_match = re.search(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']', content, re.IGNORECASE)
    if not canonical_match:
        canonical_match = re.search(r'<link\s+href=["\'](.*?)["\']\s+rel=["\']canonical["\']', content, re.IGNORECASE)
    check(f"{filename}: Canonical link exists", bool(canonical_match), "Missing canonical link")

    # Headings hierarchy
    h1_matches = re.findall(r"<h1\b[^>]*>(.*?)</h1>", content, re.IGNORECASE | re.DOTALL)
    check(f"{filename}: Single H1 Tag", len(h1_matches) == 1, f"Found {len(h1_matches)} H1 tags (expected exactly 1)")

    # Image Alt attributes
    img_tags = re.findall(r"<img\b[^>]*>", content, re.IGNORECASE)
    missing_alts = 0
    for img in img_tags:
        if not re.search(r'\balt=["\'][^"\']*["\']', img, re.IGNORECASE):
            missing_alts += 1
    check(f"{filename}: All images have alt attributes", missing_alts == 0, f"{missing_alts} image(s) missing alt attribute")

    # Schema JSON-LD for Home
    if is_home:
        schema_match = re.search(r'<script\s+type=["\']application/ld\+json["\']>(.*?)</script>', content, re.IGNORECASE | re.DOTALL)
        check(f"{filename}: JSON-LD Schema present", bool(schema_match), "Missing application/ld+json script")
        if schema_match:
            try:
                schema_json = json.loads(schema_match.group(1))
                check(f"{filename}: JSON-LD valid JSON", True, "")
                check(f"{filename}: Schema has @graph", "@graph" in schema_json or "@context" in schema_json, "Missing @graph/@context")
            except Exception as e:
                check(f"{filename}: JSON-LD valid JSON", False, f"JSON parse error: {str(e)}")

    # Internal Assets / Links exist
    src_matches = re.findall(r'(?:src|href)=["\']([^"\':#?][^"\']*)["\']', content, re.IGNORECASE)
    missing_assets = []
    for asset in set(src_matches):
        if asset.startswith("http") or asset.startswith("mailto:") or asset.startswith("tel:") or asset.startswith("javascript:") or asset.startswith("#"):
            continue
        clean_asset = asset.split("?")[0].split("#")[0]
        asset_path = os.path.join(WORKSPACE_DIR, clean_asset)
        if not os.path.exists(asset_path):
            missing_assets.append(clean_asset)
    check(f"{filename}: Local linked assets exist ({len(src_matches) - len(missing_assets)} validated)", len(missing_assets) == 0, f"Missing files: {missing_assets}")

def test_sitemap():
    print("\n--- Testing sitemap.xml ---")
    sitemap_path = os.path.join(WORKSPACE_DIR, "sitemap.xml")
    check("sitemap.xml exists", os.path.exists(sitemap_path), "sitemap.xml missing")
    if os.path.exists(sitemap_path):
        try:
            tree = ET.parse(sitemap_path)
            root = tree.getroot()
            check("sitemap.xml valid XML root", "urlset" in root.tag, f"Root tag '{root.tag}' is not urlset")
            urls = root.findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url")
            check("sitemap.xml contains URLs", len(urls) >= 2, f"Found {len(urls)} URLs")
        except Exception as e:
            check("sitemap.xml parse valid", False, str(e))

def test_robots():
    print("\n--- Testing robots.txt ---")
    robots_path = os.path.join(WORKSPACE_DIR, "robots.txt")
    check("robots.txt exists", os.path.exists(robots_path), "robots.txt missing")
    if os.path.exists(robots_path):
        with open(robots_path, "r", encoding="utf-8") as f:
            content = f.read()
        check("robots.txt has User-agent", "User-agent:" in content, "Missing User-agent")
        check("robots.txt has Sitemap directive", "Sitemap:" in content, "Missing Sitemap link")

def test_llms_and_404():
    print("\n--- Testing llms.txt and 404.html ---")
    for doc in ["llms.txt", "404.html"]:
        path = os.path.join(WORKSPACE_DIR, doc)
        check(f"{doc} exists", os.path.exists(path) and os.path.getsize(path) > 0, f"{doc} missing or empty")

def main():
    print("=" * 60)
    print(" UNIVERSAL MASTERPIECE SEO & QUALITY GATE VALIDATOR")
    print("=" * 60)
    test_config_files()
    test_html_file("index.html", is_home=True)
    test_html_file("files.html", is_home=False)
    test_html_file("404.html", is_home=False)
    test_sitemap()
    test_robots()
    test_llms_and_404()

    print("\n" + "=" * 60)
    print(f"RESULTS: {len(PASSED)} Passed, {len(WARNINGS)} Warnings, {len(ERRORS)} Errors")
    print("=" * 60)
    if ERRORS:
        print("\nERRORS TO FIX:")
        for err in ERRORS:
            print(f"  - {err}")
        exit(1)
    else:
        print("\nALL SEO & CODE QUALITY GATES PASSED! (100% COMPLIANT)")
        exit(0)

if __name__ == "__main__":
    main()
