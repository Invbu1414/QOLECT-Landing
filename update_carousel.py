import re

# Read the Hero.tsx file
with open('components/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the section with the 4 hardcoded cards and replace with dynamic mapping
# We need to find the section that starts with {/* Card 1 - Cartagena */} and ends before the closing divs

# First, let's find where the cards start
cards_start_pattern = r'{/\* Colombia Cards Stack \(Fan Layout\) \*/}'
cards_section_start = content.find('/* Colombia Cards Stack (Fan Layout) */')

if cards_section_start != -1:
    print("Found cards section")
    # Find the div that contains all 4 cards
    # We'll replace the 4 individual card divs with a mapped version
    
    # Create the new dynamic card mapping code
    new_cards_code = '''          {/* Colombia Cards Stack (Fan Layout) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '80vh'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '70rem',
                height: '45rem',
                margin: '0 auto'
              }}
            >
              {experiences.slice(0, 4).map((experience, index) => (
                <div
                  key={experience.plan_id}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '35rem',
                    height: '40rem',
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '1.5rem',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRight: '3px solid rgba(245, 197, 66, 0.6)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3rem',
                    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.16)',
                    transition: 'all 0.7s ease',
                    transform: cardsVisible[index]
                      ? `translateX(${index * 80}px) scale(1)`
                      : `translateX(${index * 80}px) scale(0.8)`,
                    opacity: cardsVisible[index] ? 1 : 0,
                    cursor: 'pointer',
                    zIndex: 20 - index
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `translateX(${index * 80}px) scale(1.05)`
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.3)'
                    e.currentTarget.style.zIndex = '30'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `translateX(${index * 80}px) scale(1)`
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.16)'
                    e.currentTarget.style.zIndex = String(20 - index)
                  }}
                >
                  <div style={{ textAlign: 'center', color: 'white', width: '100%' }}>
                    {/* Image */}
                    {experience.plan_image && (
                      <div style={{ position: 'relative', width: '8rem', height: '8rem', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden' }}>
                        <Image
                          src={experience.plan_image}
                          alt={experience.plan_title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    
                    <p style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                      {experience.plan_title}
                    </p>
                    <p style={{ fontSize: '1.3rem', opacity: 0.8, marginBottom: '1rem' }}>
                      {experience.descripcioncorta || experience.categoria}
                    </p>
                    <p style={{ fontSize: '1.8rem', color: '#F5C542', fontWeight: '700' }}>
                      ${experience.precio.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>'''
    
    # Find and replace the entire cards section
    # Pattern to match from "Colombia Cards Stack" comment to the end of the last card div
    pattern = r'{/\* Colombia Cards Stack \(Fan Layout\) \*/}.*?(?=</div>\s*</div>\s*{/\* Styles Section \*/})'
    
    content = re.sub(pattern, new_cards_code, content, flags=re.DOTALL)
    
    # Write back
    with open('components/Hero.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ Hero.tsx carousel updated successfully!")
    print("- Replaced hardcoded cards with dynamic API data mapping")
    print("- Cards now show: image, title, description, and price from API")
else:
    print("❌ Could not find cards section")
