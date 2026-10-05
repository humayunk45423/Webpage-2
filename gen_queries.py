import json
import csv

def generate_query_universe():
    with open('seeds.json', 'r', encoding='utf-8') as f:
        seeds = json.load(f)

    rows = []
    seen = set()

    def add_query(query, target_url, cluster, lang):
        q = query.strip()
        if q.lower() not in seen:
            seen.add(q.lower())
            rows.append({
                'query': q,
                'target_url': target_url,
                'cluster': cluster,
                'language': lang,
                'source': 'generated_universe'
            })

    # 1. Entity combinations
    for name in seeds['entity_names']:
        add_query(name, 'https://humayounkobir.vercel.app/', 'brand_core', 'en')
        for mod in seeds['modifiers']:
            add_query(f"{name} {mod}", 'https://humayounkobir.vercel.app/', 'brand_modifier', 'en')
            add_query(f"{mod} {name}", 'https://humayounkobir.vercel.app/', 'brand_modifier', 'en')

    # 2. Bangla combinations
    for b_name in seeds['bangla_names']:
        add_query(b_name, 'https://humayounkobir.vercel.app/', 'brand_bn', 'bn')
        for b_mod in seeds['bangla_modifiers']:
            add_query(f"{b_name} {b_mod}", 'https://humayounkobir.vercel.app/', 'brand_bn_modifier', 'bn')
        for en_mod in seeds['modifiers']:
            add_query(f"{b_name} {en_mod}", 'https://humayounkobir.vercel.app/', 'brand_mixed', 'bn-en')

    # 3. Software HQ combinations
    for term in seeds['software_hq_terms']:
        add_query(term, 'https://humayounkobir.vercel.app/files.html', 'software_hq_core', 'en')
        add_query(f"Humayun Kabir {term}", 'https://humayounkobir.vercel.app/files.html', 'software_hq_brand', 'en')
        add_query(f"Humayoun Kobir {term}", 'https://humayounkobir.vercel.app/files.html', 'software_hq_brand', 'en')

    # Write to keywords.csv
    with open('keywords.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['query', 'target_url', 'cluster', 'language', 'source'])
        writer.writeheader()
        writer.writerows(rows)

    print(f"Generated {len(rows)} mapped keyword combinations in keywords.csv (Unmapped = 0)")

if __name__ == '__main__':
    generate_query_universe()
