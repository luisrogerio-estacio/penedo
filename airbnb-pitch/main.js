document.addEventListener('DOMContentLoaded', () => {
    // Configurações globais do Chart.js
    Chart.defaults.font.family = "'Outfit', sans-serif";
    Chart.defaults.color = '#6c757d';
    
    // 1. Gráfico de Distribuição dos Custos do Investimento (Pizza/Doughnut)
    const ctxCost = document.getElementById('costChart').getContext('2d');
    new Chart(ctxCost, {
        type: 'doughnut',
        data: {
            labels: ['Mão de Obra', 'Materiais', 'Administração', 'Terreno', 'Outros'],
            datasets: [{
                data: [400000, 400000, 250000, 250000, 77845.81],
                backgroundColor: [
                    '#0f1115', // bg-dark
                    '#1976d2', // blue
                    '#d4af37', // gold
                    '#2e7d32', // green
                    '#e9ecef'  // border/gray
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { boxWidth: 12, padding: 15 }
                },
                title: {
                    display: true,
                    text: 'Distribuição do Investimento',
                    font: { size: 16, family: "'Playfair Display', serif" },
                    color: '#1a1d20'
                }
            },
            cutout: '65%'
        }
    });

    // 2. Gráfico Cenário Conservador x Cenário Premium (Barra Dupla - Mensal e Anual)
    const ctxRevCompare = document.getElementById('revenueCompareChart').getContext('2d');
    new Chart(ctxRevCompare, {
        type: 'bar',
        data: {
            labels: ['Conservador', 'Premium'],
            datasets: [
                {
                    label: 'Receita Anual Estimada (R$)',
                    data: [984000, 1464000],
                    backgroundColor: ['#1976d2', '#2e7d32'],
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Receita Anual: Conservador x Premium',
                    font: { size: 16, family: "'Playfair Display', serif" },
                    color: '#1a1d20'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + (value/1000) + 'k';
                        }
                    },
                    grid: { color: '#f8f9fa' }
                },
                x: { grid: { display: false } }
            }
        }
    });

    // 3. Gráfico Comparação Investimento x Faturamento Anual (Barra)
    const ctxInvestRev = document.getElementById('investRevenueChart').getContext('2d');
    new Chart(ctxInvestRev, {
        type: 'bar',
        data: {
            labels: ['Investimento Inicial', 'Faturamento (Cons.)', 'Faturamento (Prem.)'],
            datasets: [{
                data: [1500000, 984000, 1464000],
                backgroundColor: [
                    '#0f1115',
                    '#1976d2',
                    '#2e7d32'
                ],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Investimento vs Faturamento (Ano 1)',
                    font: { size: 16, family: "'Playfair Display', serif" },
                    color: '#1a1d20'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + (value/1000) + 'k';
                        }
                    },
                    grid: { color: '#f8f9fa' }
                },
                x: { grid: { display: false } }
            }
        }
    });

    // 4. Gráfico Lucro Líquido (3% e 5%) (Barra horizontal)
    const ctxNetProfit = document.getElementById('netProfitChart').getContext('2d');
    new Chart(ctxNetProfit, {
        type: 'bar',
        data: {
            labels: ['Margem 3%', 'Margem 5%'],
            datasets: [{
                label: 'Lucro Líquido Anual (R$)',
                data: [540000, 900000],
                backgroundColor: ['#1976d2', '#2e7d32'],
                borderRadius: 6
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Projeção de Lucro Líquido Anual',
                    font: { size: 16, family: "'Playfair Display', serif" },
                    color: '#1a1d20'
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + (value/1000) + 'k';
                        }
                    },
                    grid: { color: '#f8f9fa' }
                },
                y: { grid: { display: false } }
            }
        }
    });
});
