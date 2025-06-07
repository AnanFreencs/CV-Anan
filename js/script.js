// typing animation
var typed = new Typed(".home .typing", {
    strings:["Web Developer", "Web Designer", "Data Analyze", "Skatcher", "Traveller", "Mentalist"],
    typeSpeed:120,
    BackSpeed:60,
    loop:true
})
var typed = new Typed(".about .typing", {
    strings:["Web Developer", "Web Designer", "Data Analyze", "Skatcher", "Traveller", "Mentalist"],
    typeSpeed:120,
    BackSpeed:60,
    loop:true
})

// aside
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a= navList[i].querySelector("a");
        a.addEventListener("click", function()
    {
        removeBackSection();
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBacksection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
    }
    function addBacksection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function removeBackSection()
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[1].querySelector("a").classList.remove("active");
            const target=element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[1].querySelector("a").classList.get("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBacksection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click",  () => 
        {
            asideSectionTogglerBtn()
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open");
            }
        }
        // ...existing code...

// Hire Me button scroll and menu highlight
document.querySelectorAll('.hire-me').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        // Scroll ke section contact
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Set menu aside: hanya contact yang aktif
        document.querySelectorAll('.aside .nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#contact') {
                link.classList.add('active');
            }
        });
    });
});
// email
(function(){
    emailjs.init("oFlot7553WtCJohm7");
})();
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('service_nxny2lm', 'template_jx18lcp', this)
      .then(function() {
        alert('Pesan berhasil dikirim!');
        document.getElementById('contact-form').reset();
      }, function(error) {
        alert('Gagal mengirim pesan. Silakan coba lagi.');
      });
});
