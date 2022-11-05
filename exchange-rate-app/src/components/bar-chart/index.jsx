import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const BarChart = ({fiveExchangeRates, countryName, countryCode}) => {
    console.log(fiveExchangeRates);
    const multiAxisData = {
        labels: fiveExchangeRates.map(country =>country.name),
        datasets: [{
            label: countryName,
            backgroundColor: [
                '#EC407A',
                '#AB47BC',
                '#42A5F5',
                '#7E57C2',
                '#66BB6A',
            ],
            yAxisID: 'y',
            data: fiveExchangeRates.map(country =>country.rate)
        }]
    }


    const getLightTheme = () => {
        let multiAxisOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        min: 0,
                        max: 100,
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        return {
            multiAxisOptions
        }
    }

    const { multiAxisOptions } = getLightTheme();

    return (
        <div>
            <div className="card">
                <Chart type="bar" data={multiAxisData} options={multiAxisOptions} />
            </div>


        </div>
    )
}

export default BarChart