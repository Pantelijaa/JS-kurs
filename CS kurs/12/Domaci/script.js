const barChart = document.querySelector('#barChart');

new Chart(barChart, {
    type: 'bar',
    data: {
        labels: [
            'React.js',
            'jQuery',
            'Express',
            'Angular',
            'Vue.js',
            'ASP.NET Core',
            'Flask',
            'ASP.NET',
            'Django',
            'Spring'
        ],
        datasets: [
            {
                label: 'Top 10 najkoriscenijih web frameworka (2021)',
                data: [40.14, 34.43, 23.82, 22.96, 18.97, 18.1, 16.14, 15.74, 14.99, 14.56],
                backgroundColor: [
                    'rgba(16, 164, 228, 1)',
                    'rgba(36, 36, 211, 1)',
                    'rgba(8, 154, 0, 1)',
                    'rgba(210, 25, 25, 1)',
                    'rgba(25, 210, 147, 1)',
                    'rgba(127, 25, 210, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(13, 121, 195, 1)',
                    'rgba(10, 84, 22, 1)',
                    'rgba(16, 228, 23, 1)'
                ]
            }
        ],
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Top 10 najkoriscenijih web frameworka (2021)'
            }
        },      
        scales: {
            x: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 50
            }
        }
    },

})