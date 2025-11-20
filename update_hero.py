import re

# Read the Hero.tsx file
with open('components/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update function signature to accept experiences prop
content = re.sub(
    r'export default function Hero\(\{ isLoading = false \}: \{ isLoading\?: boolean \}\)',
    'export default function Hero({ isLoading = false, experiences = [] }: { isLoading?: boolean, experiences?: any[] })',
    content
)

# 2. Add import for Experience type at the top
if 'import { Experience } from' not in content:
    content = content.replace(
        "import BrandsCarousel from '@/components/BrandsCarousel'",
        "import BrandsCarousel from '@/components/BrandsCarousel'\nimport { Experience } from '@/lib/api'\nimport Image from 'next/image'"
    )

# 3. Remove the "¿Por qué elegir Qolect?" section (lines 384-540 approximately)
# Find and remove the Qolect Information Section
pattern = r'{/\* Qolect Information Section \*/}.*?</section>\s*\n\s*{/\* Experiences Section \*/}'
content = re.sub(pattern, r'{/* Experiences Section */}', content, flags=re.DOTALL)

# Write back
with open('components/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Hero.tsx updated successfully!")
print("- Added experiences prop")
print("- Added Experience type import")
print("- Removed '¿Por qué elegir Qolect?' section")
