document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Projeto 1',
            image: 'https://via.placeholder.com/600x400',
            description: 'Descrição do Projeto 1'
        },
        {
            title: 'Projeto 2',
            image: 'https://via.placeholder.com/600x400',
            description: 'Descrição do Projeto 2'
        },
        {
            title: 'Projeto 3',
            image: 'https://via.placeholder.com/600x400',
            description: 'Descrição do Projeto 3'
        }
    ];

    const projectImage = document.getElementById('project-image');
    const portfolioItems = document.getElementById('portfolio-items');
    const prevProject = document.getElementById('prev-project');
    const nextProject = document.getElementById('next-project');

    let currentProject = 0;

    function loadProject(index) {
        projectImage.src = projects[index].image;
        // Clear existing items and highlight the current one
        portfolioItems.innerHTML = '';
        projects.forEach((project, i) => {
            const li = document.createElement('li');
            li.textContent = project.title;
            if (i === index) {
                li.classList.add('active');
            }
            li.addEventListener('click', () => loadProject(i));
            portfolioItems.appendChild(li);
        });
    }

    nextProject.addEventListener('click', () => {
        currentProject = (currentProject + 1) % projects.length;
        loadProject(currentProject);
    });

    prevProject.addEventListener('click', () => {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        loadProject(currentProject);
    });

    // Initial load
    loadProject(currentProject);
});
