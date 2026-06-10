const counters = document.querySelectorAll(".counter");
const stats = document.querySelector(".stats");
const cards = document.querySelectorAll(".card");

let started = false;

if (stats) {   // 👈 أهم سطر

    const observer = new IntersectionObserver((entries) => {

        if (entries[0].isIntersecting && !started) {

            started = true;

            counters.forEach(counter => {

                const target = +counter.dataset.target;
                let current = 0;
                const increment = target / 60;

                function update() {

                    current += increment;

                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = "+" + target.toLocaleString();
                    }
                }

                update();
            });
        }

    }, {
        threshold: 0.4
    });

    observer.observe(stats);
}






document.querySelectorAll(".toggle-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.closest(".news-card");

        card.classList.toggle("open");

        btn.textContent = card.classList.contains("open")
            ? "إخفاء التفاصيل"
            : "قراءة المزيد";

    });

});













document.querySelectorAll(".price-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.closest(".package-card");

        card.classList.toggle("open");

        btn.textContent = card.classList.contains("open")
            ? "إخفاء السعر"
            : "اعرف السعر";

    });

});










const elements = document.querySelectorAll(".hidden-scroll");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }

    });

},{
    threshold: 0.15
});

elements.forEach(el=>{
    observer.observe(el);
});
cards.forEach((card,index)=>{
    card.style.transitionDelay = `${index * 0.15}s`;
});






const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        faqItems.forEach(other => {

            if(other !== item){
                other.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});