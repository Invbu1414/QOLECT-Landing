"""
Script to add dynamic experience carousel to Hero.tsx
This script carefully modifies the Hero component to display API data in the fan carousel
"""

# Read the original Hero.tsx
with open('components/Hero.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the line with the incomplete carousel div (around line 437-439)
# We need to find where it says: style={{
# and then add the complete carousel structure

output_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    output_lines.append(line)
    
    # Look for the specific pattern where the carousel div is incomplete
    if i >= 436 and 'style={{' in line and i < 440:
        # Check if next line is the CSS animations (which means carousel is missing)
        if i + 2 < len(lines) and '<style jsx>' in lines[i + 2]:
            print(f"Found incomplete carousel at line {i+1}")
            # Add the complete carousel structure
            carousel_code = """                position: 'relative',
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
                    {experience.plan_image && (
                      <div style={{ 
                        position: 'relative', 
                        width: '12rem', 
                        height: '12rem', 
                        margin: '0 auto 1.5rem', 
                        borderRadius: '1rem', 
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                      }}>
                        <Image
                          src={experience.plan_image}
                          alt={experience.plan_title}
                          fill
                          style={{ objectFit: 'cover' }}
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
                      ${experience.precio?.toLocaleString() || '0'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
"""
            output_lines.append(carousel_code)
            # Skip the next line which would be the style jsx line
            i += 2
            continue
    
    i += 1

# Write the modified file
with open('components/Hero.tsx', 'w', encoding='utf-8') as f:
    f.writelines(output_lines)

print("✅ Successfully added dynamic carousel to Hero.tsx!")
print("- Carousel now maps experiences from API")
print("- Shows images, titles, descriptions, and prices")
print("- Maintains fan animation effect")
