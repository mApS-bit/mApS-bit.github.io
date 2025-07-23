document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      imgSrc: 'assets/images/logos/javaScript-logo.png',
      title: 'Five JavaScript codes',
      description: `Here you have five simple JavaScript code, I wrote
        these five codes to gain one of my first 
        <a href="https://www.freecodecamp.org/certification/MathcoAPulido/javascript-algorithms-and-data-structures">freeCodeCamp</a> certifications.`,
      repoLink: 'https://github.com/mApS-bit/first-five-JavaScripts-codes',
      visit: 'Here They are!!!'
    },
    {
      imgSrc: 'assets/images/logos/d3.png',
      title: 'Bar Chart',
      description: `Data with Bar Chart. This project was develop with codePen.`,
      repoLink: 'https://codepen.io/Marco-Pulido/pen/MWRvaQd?editors=0010',
      visit: 'Take a look!!',
    },
    {
      imgSrc: 'assets/images/logos/d3.png',
      title: 'Scatterplot Graph',
      description: `Visualize Data with a Scatterplot Graph. This project was develop with codePen.`,
      repoLink: 'https://codepen.io/Marco-Pulido/pen/bGJoGer?editors=0010',
      visit: 'Take a look!!',
    },
    {
      imgSrc: 'assets/images/logos/d3.png',
      title: 'Heat Map',
      description: `Visualize Data with a Heat Map. This project was develop with codePen.`,
      repoLink: 'https://codepen.io/Marco-Pulido/pen/OJGOXag',
      visit: 'Here they are!!',
    },
    {
      imgSrc: 'assets/images/logos/d3.png',
      title: 'Choropleth Map',
      description: `Visualiz Data with a Heat Map. This project was develop with codePen.`,
      repoLink: 'https://codepen.io/Marco-Pulido/pen/wvZmeLM?editors=0010',
      visit: 'Here they are!!',
    },
    {
      imgSrc: 'assets/images/logos/d3.png',
      title: 'Treemap Diagram',
      description: `Visualize Data with a Treemap Diagram. This project was develop with codePen.`,
      repoLink: 'https://codepen.io/Marco-Pulido/pen/ExJdaOX?editors=0110',
      visit: 'Here they are!!',
    },
    {
      imgSrc: 'assets/images/logos/c-sharp.png',
      title: 'Foundational C# with Microsoft',
      description: `It is a certification I completed, and provided by freeCodeCamp in collaboration with Microsoft`,
      repoLink: 'https://www.freecodecamp.org/certification/MathcoAPulido/foundational-c-sharp-with-microsoft',
      visit: 'Here they are!!',
    },
    {
      imgSrc: 'assets/images/logos/python.png',
      title: 'Arithmetic Formatter',
      description: `Python code to compleat certification in Scientific computing provided by freeCodeCamp`,
      repoLink: 'https://replit.com/@mapulido1989/boilerplate-arithmetic-formatter-7#arithmetic_arranger.py',
      visit: 'Take a look!!',
    },
    {
      imgSrc: 'assets/images/logos/python.png',
      title: 'Time Calculator',
      description: `It is a certification I completed, and provided by freeCodeCamp in collaboration with Microsoft`,
      repoLink: 'https://www.freecodecamp.org/certification/MathcoAPulido/foundational-c-sharp-with-microsoft',
      visit: 'Here they are!!',
    },
    {
      imgSrc: 'assets/images/logos/python.png',
      title: 'Budget App',
      description: `It is a certification I completed, and provided by freeCodeCamp in collaboration with Microsoft`,
      repoLink: 'https://www.freecodecamp.org/certification/MathcoAPulido/foundational-c-sharp-with-microsoft',
      visit: 'Here they are!!',
    },
    {
      imgSrc: 'assets/images/logos/python.png',
      title: 'Polygon Area Calculator',
      description: `It is a certification I completed, and provided by freeCodeCamp in collaboration with Microsoft`,
      repoLink: 'https://www.freecodecamp.org/certification/MathcoAPulido/foundational-c-sharp-with-microsoft',
      visit: 'Here they are!!',
    },
    {
      imgSrc: 'assets/images/logos/python.png',
      title: 'Probability Calculator',
      description: `It is a certification I completed, and provided by freeCodeCamp in collaboration with Microsoft`,
      repoLink: 'https://www.freecodecamp.org/certification/MathcoAPulido/foundational-c-sharp-with-microsoft',
      visit: 'Here they are!!',
    },
  ];

  fetch('./projects-template.html')
    .then(res => res.text())
    .then(template => {
      const container = document.getElementById('project-list');
      projects.forEach(proj => {
        let html = template
          .replace(/{{imgSrc}}/g, proj.imgSrc)
          .replace(/{{title}}/g, proj.title)
          .replace(/{{description}}/g, proj.description)
          .replace(/{{repoLink}}/g, proj.repoLink)
          .replace(/{{visit}}/g, proj.visit);
        container.innerHTML += html;
      });
    });
});
