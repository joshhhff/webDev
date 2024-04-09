import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Loading from "./Loading";
import styles from '../css/component-css/WeatherAPICall.module.css';

function WeatherAPICall() {

    const viewportWidth = document.documentElement.clientWidth;

    let revealAnimation = {
        initial: viewportWidth <= 680 ? { opacity: 0, translateX: +100 } : { opacity: 0, translateY: +100 },
        whileInView: viewportWidth <= 680 ? { opacity: 1, translateX: 0} : { opacity: 1, translateY: 0},
        viewport: { once: true },
    }

    const [weatherInformation, setWeatherInformation] = useState(false);
    const [rows, setRows] = useState<ReactNode[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

    function callAPI() {
        weatherInformation ? setWeatherInformation(false) : null;
        setLoading(true);
        error ? setError(false) : null;
        
        function getWeatherLocation() {
            const weatherLocationInput = document.getElementById('weatherlocation') as HTMLInputElement;
            if (weatherLocationInput.value !== '') {
                console.log(weatherLocationInput.value);
                return weatherLocationInput.value;
            } else {
                console.log('empty box');
                setLoading(false);
            }
        }
        
        const location = getWeatherLocation();
        const apiKey = 'BLG92CBEVJYMXE84L8SHH68DL';
        const unitGroup = 'uk';     //put some logic in to ask user what unit system they want to use
        console.log(location);
        
        if (location !== ('' || undefined)) {
            fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=${unitGroup}&key=${apiKey}`, {
            }).then(response => {
                setWeatherInformation(true);    //should be fine?? if error was to happen then it would be caught by the catch??
                if (response.status === 429) {
                    setError(true);
                    setErrorMessage('Number of API calls exceeded - try again tomorrow')
                }else if (response.status !== 200) {
                    setError(true);
                    setErrorMessage(`"${location}" is not recognised - please try again`);
                }
                return response.json();
            }).then((data: any) => {
                typeof(data) === 'object' && data !== null ? processData(data) : null;
            }).catch(err => {
                err;    //so typescript doesnt throw a fit for not being used
                setLoading(false);
                setWeatherInformation(false);
            });
        }
    }

    function processData(data: any) {

        function formatTime(time: string) {
            const lastIndex = time.lastIndexOf(':')

            return time.substring(0, lastIndex);
        }

        const weatherData = data;

        const allHours: any[] = weatherData.days[0].hours;
        const wantedHours = [6, 8, 10, 12, 14, 16, 18, 20, 22];        //first instance is 00:00:00, so index 6 = 06:00:00

        const filteredHours = allHours.filter((_, index) => wantedHours.includes(index));
        //const filteredHours = allHours;

        const location = `Weather in: ${weatherData.resolvedAddress}`;
        const sunrise = formatTime(weatherData.days[0].sunrise);
        const sunset = formatTime(weatherData.days[0].sunset);

        let weatherIcons: any = [];

        filteredHours.map(function(condition){
            condition = condition.conditions;   //select current weather condition
            console.log(condition)
            let weatherIcon = '';
            
            //sets weather icon depending on condition value from api
            if (condition){
                condition == 'Partially cloudy' ? weatherIcon = './WeatherIcons/PartiallyCloudy.png' : null;
                condition == 'Clear' ? weatherIcon = './WeatherIcons/SunIcon.png' : null;
                condition == 'Rain' ? weatherIcon = './WeatherIcons/RainWithCloud.png' : null;
                condition == 'Rain, Overcast' ? weatherIcon = './WeatherIcons/RainOvercast.png' : null;
                condition == 'Rain, Partially cloudy' ? weatherIcon = './WeatherIcons/RainPartiallyCloudy.png' : null;
                condition == 'Overcast' ? weatherIcon = './WeatherIcons/Overcast.png' : null;
                
                weatherIcons.push(weatherIcon);
            }
        });

        //create new row per object of data
        const newRows = filteredHours.map((_, i) => (
            <motion.tr key={i} className={styles.weatherRow} whileHover={{ scale: 1.02 }}>
                <td>{formatTime(filteredHours[i].datetime)}</td>
                <td><div><img src={weatherIcons[i]} alt="" /></div></td>
                <td>{filteredHours[i].conditions}</td>
                <td>{filteredHours[i].temp}°C</td>
                <td>{filteredHours[i].windspeed}/mph</td>
            </motion.tr>
        ));

        const locationHeader = document.getElementById('weather-location');
        const sunriseTime = document.getElementById('sunriseTime');
        const sunsetTime = document.getElementById('sunsetTime');

        locationHeader ? locationHeader.innerHTML = location : null;
        sunriseTime ? sunriseTime.innerHTML = sunrise : null;
        sunsetTime ? sunsetTime.innerHTML = sunset : null;
        
        setRows(newRows);
        setLoading(false);
    }

    return (
        <motion.section className={styles.weatherApiContainer} {...revealAnimation}>
            <div className={styles.info}>
                <h2>APIs</h2>
                <p>I have experience in using APIs, with my main experience being in REST APIs and GraphQL APIs</p>
                <img className={styles.apiLogo} src="./VisualCrossing.png" alt="" />
            </div>
            <div className={styles.container}>
                <div className={styles.weatherForecast}>
                    <div className={styles.enterLocationContainer}>
                        <p>Check the weather, using Visual Crossing's Timeline Weather API!</p>
                        <input placeholder="Type here" type="text" id="weatherlocation" className={styles.enterLocationInput} />
                        <motion.button onClick={callAPI} className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Get Weather</motion.button>                    
                    </div>
                    {weatherInformation && (
                        <>
                            <p id="weather-location" className={styles.weatherHeader}></p>
                            <table className={styles.sunRiseAndSet}>
                                <tbody>
                                    <tr>
                                        <td><p id="sunriseTime"></p></td>
                                        <td><p id="sunsetTime"></p></td>
                                    </tr>
                                    <tr>
                                        <td><img src="./WeatherIcons/SunriseIcon.png" alt="" /></td>
                                        <td><img src="./WeatherIcons/SunsetIcon.png" alt="" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className={styles.weatherTable}>
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th></th>
                                        <th>Conditions</th>
                                        <th>Temperature</th>
                                        <th>Windspeed</th>
                                    </tr>
                                </thead>
                                <tbody id="weatherData">
                                    {rows}
                                </tbody>
                            </table>
                        </>
                    )}
                    {loading && (
                        <>
                            <p className={styles.loadingMessage}><Loading /></p>
                        </>
                    )}
                    {error && (
                        <>
                            <p className={styles.errorMessage}>{errorMessage}</p>
                        </>
                    )}
                </div>
            </div>
    </motion.section>
    )
}

export default WeatherAPICall;