let chartInstance = null;

function drawBarChart(data, canvas) {
    const labels = data.map(item => item.name);
    const values = data.map(item => item.value);

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Данные',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(174, 53, 116, 0.8)',
                    'rgba(26, 25, 199, 0.8)',
                ],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function drawPieChart(data, canvas) {
    const labels = data.map(item => item.name);
    const values = data.map(item => item.value);

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(canvas, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(174, 53, 116, 0.8)',
                    'rgba(26, 25, 199, 0.8)',
                ]
            }]
        }
    });
}

function drawDoughnutChart(data, canvas) {
    const labels = data.map(item => item.name);
    const values = data.map(item => item.value);

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(174, 53, 116, 0.8)',
                    'rgba(26, 25, 199, 0.8)',
                ]
            }]
        }
    });
}

function drawLineChart(data, canvas) {
    const labels = data.map(item => item.name);
    const values = data.map(item => item.value);

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(canvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Данные',
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        }
    });
}

function getDrawFunction(type) {
    switch (type) {
        case 'bar':
            return drawBarChart;
        case 'pie':
            return drawPieChart;
        case 'doughnut':
            return drawDoughnutChart;
        case 'line':
            return drawLineChart;
        default:
            return drawBarChart;
    }
}
