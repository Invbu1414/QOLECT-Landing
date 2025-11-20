"""
Script to remove the duplicate "Nuestras Experiencias" section from Hero.tsx
This section has hardcoded data and should be removed since we now have ExperiencesCarousel
"""

with open('components/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and remove the "Experiences Section" from Hero.tsx
# This section starts with {/* Experiences Section */} and ends before the CSS animations

import re

# Pattern to match the entire Experiences Section
pattern = r'{/\* Experiences Section \*/}.*?(?={/\* CSS Animations \*/}|<style jsx>)'

# Remove the section
new_content = re.sub(pattern, '', content, flags=re.DOTALL)

# Write back
with open('components/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ Successfully removed duplicate 'Nuestras Experiencias' section from Hero.tsx!")
print("- The correct ExperiencesCarousel component remains in ClientWrapper")
print("- Hero.tsx now only contains the headline section")
