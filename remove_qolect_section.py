"""
Script to remove the "¿Por qué elegir Qolect?" section from Hero.tsx
"""

with open('components/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Pattern to match the "Qolect Information Section"
# This section starts with {/* Qolect Information Section */} and ends before {/* Experiences Section */}
pattern = r'{/\* Qolect Information Section \*/}.*?(?={/\* Experiences Section \*/}|{/\* CSS Animations \*/}|<style jsx>)'

# Remove the section
new_content = re.sub(pattern, '', content, flags=re.DOTALL)

# Write back
with open('components/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ Successfully removed '¿Por qué elegir Qolect?' section from Hero.tsx!")
print("- Hero.tsx now only contains the headline section")
print("- All experience data is shown in ExperiencesCarousel component")
