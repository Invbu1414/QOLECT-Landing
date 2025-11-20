"""
Script to increase image size in ExperiencesCarousel from 12rem to 18rem
"""

with open('components/ExperiencesCarousel.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace 12rem with 18rem for width and height
content = content.replace("width: '12rem',", "width: '18rem',")
content = content.replace("height: '12rem',", "height: '18rem',")
content = content.replace('sizes="12rem"', 'sizes="18rem"')

# Write back
with open('components/ExperiencesCarousel.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Successfully increased image size from 12rem to 18rem!")
print("- Images in experience cards are now larger and more visible")
