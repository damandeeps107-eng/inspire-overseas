const fs = require('fs');
const path = require('path');

const indexFile = '/Users/user/.gemini/antigravity-ide/scratch/s-global-educators/index.html';

if (fs.existsSync(indexFile)) {
    let content = fs.readFileSync(indexFile, 'utf8');

    // 1. Re-style About section bullet points into a premium card-style grid
    const oldBulletsRegex = /<!-- Simple Bullet Points -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;
    
    // Let's verify what lies after the bullet points so we replace cleanly
    // The section ends with </div> </div> </div> </section>
    const newBulletsHtml = `<!-- Premium Feature Grid -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div class="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-white/80 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 group">
                                <div class="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                                    <span class="material-symbols-outlined font-bold text-lg">school</span>
                                </div>
                                <span class="font-headline text-sm font-bold text-primary">Experienced Counsellors</span>
                            </div>
                            <div class="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-white/80 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 group">
                                <div class="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                                    <span class="material-symbols-outlined font-bold text-lg">diversity_3</span>
                                </div>
                                <span class="font-headline text-sm font-bold text-primary">Personalized Guidance</span>
                            </div>
                            <div class="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-white/80 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 group">
                                <div class="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                                    <span class="material-symbols-outlined font-bold text-lg">verified_user</span>
                                </div>
                                <span class="font-headline text-sm font-bold text-primary">Complete Visa Support</span>
                            </div>
                            <div class="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-white/80 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 group">
                                <div class="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                                    <span class="material-symbols-outlined font-bold text-lg">visibility</span>
                                </div>
                                <span class="font-headline text-sm font-bold text-primary">100% Transparent Process</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

    content = content.replace(/<!-- Simple Bullet Points -->[\s\S]*?<!-- 3\. SERVICES SECTION -->/, `${newBulletsHtml}\n\n        <!-- 3. SERVICES SECTION -->`);

    // 2. Re-style first CTA section
    const oldCta1Regex = /<!-- CTA Section -->[\s\S]*?<!-- 4\.5\. IELTS & PTE COACHING SECTION -->/;
    const newCta1Html = `<!-- CTA Section -->
                <div class="mt-16 text-center animate-enter" style="animation-delay: 0.5s;">
                    <div class="glass-card rounded-3xl p-12 shadow-xl border border-white/50 bg-gradient-to-r from-primary to-slate-900 text-white relative overflow-hidden">
                        <!-- Background Glow Shapes -->
                        <div class="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-secondary/30 to-primary/10 blur-3xl pointer-events-none"></div>
                        <div class="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl pointer-events-none"></div>
                        
                        <h2 class="font-headline text-2xl md:text-3xl mb-6 relative z-10 font-bold text-white">Ready to start your global journey?</h2>
                        <p class="text-body-lg mb-8 max-w-2xl mx-auto text-sky-100 relative z-10">Our experts are here to guide you through university selection, applications, and visa processes for your dream destination.</p>
                        <a class="inline-flex bg-secondary text-white font-label font-bold text-lg py-4 px-8 rounded-full hover:bg-secondary/90 transition-all active:scale-95 duration-200 shadow-lg shadow-secondary/20 relative z-10" href="#contact">
                            Book a free profile evaluation
                        </a>
                    </div>
                </div>
            </div>
        </section>`;

    content = content.replace(oldCta1Regex, `${newCta1Html}\n\n        <!-- 4.5. IELTS & PTE COACHING SECTION -->`);

    // 3. Re-style second CTA section
    const oldCta2Regex = /<!-- CTA Section -->[\s\S]*?Book Free Consultation\s*<\/a>\s*<\/div>\s*<\/div>/;
    const newCta2Html = `<!-- CTA Section -->
            <div class="mt-16 text-center px-margin-mobile md:px-margin-desktop py-20 bg-gradient-to-r from-slate-950 via-primary to-slate-950 text-white relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <!-- Background Glow Shapes -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-secondary/10 blur-[120px] pointer-events-none"></div>
                
                <div class="max-w-3xl mx-auto relative z-10 fade-up">
                    <h2 class="font-headline text-3xl md:text-4xl mb-6 font-bold text-white">Write your own success story.</h2>
                    <p class="font-body text-base md:text-lg text-sky-100 mb-8 max-w-xl mx-auto">Get started today and turn your global dreams into reality with expert guidance.</p>
                    <a class="inline-flex bg-secondary text-white py-4 px-10 rounded-full font-label font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/25 active:scale-95 duration-200" href="#contact">
                        Book Free Consultation
                    </a>
                </div>
            </div>`;

    content = content.replace(oldCta2Regex, newCta2Html);

    fs.writeFileSync(indexFile, content, 'utf8');
    console.log('Successfully polished index.html with premium CTAs and feature grid.');
}
