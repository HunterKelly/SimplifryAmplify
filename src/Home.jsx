import Navigation from "../src/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import './MasterStyles.css';
import WeatherDisplay from "./Weather/weather";



function Home() {
    const navigate = useNavigate();

    function navigateTo(destination) {
        navigate(`/${destination}`);
    }
    const buttonStyle = {
        
       
    };

    return (
        <div>
            <div>
                <Navigation />
            </div>
            <div>
                <WeatherDisplay />
            </div>

            <h1>Welcome to Simplifry</h1>
            <h3>Click on the mix you are using</h3>
            <button onClick={() => navigateTo('SummerMix')} style={buttonStyle}>
                Summer Mix
            </button>
            <button onClick={() => navigateTo('WinterMix')} style={buttonStyle}>
                Winter Mix
            </button>
            <button onClick={() => navigateTo('CustomMix')} style={buttonStyle}>
                Custom Mix
            </button>
            <br /><br />

            <h3>Or Click the herbicide you are using.</h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <button onClick={() => navigateTo('Glyphosate')} style={buttonStyle}>
                                Glyphosate - Weed Killer
                            </button>
                        </td>
                        <td>
                            <button onClick={() => navigateTo('Esplanade')} style={buttonStyle}>
                                Esplanade - Broadleaf Weed Control
                            </button>
                        </td>
                        <td>
                            <button onClick={() => navigateTo('Dye')} style={buttonStyle}>
                                Dye - Helps See Where You've Sprayed
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => navigateTo('Boost')} style={buttonStyle}>
                                Boost - Lawn Growth Enhancer
                            </button>
                        </td>
                        <td>
                            <button onClick={() => navigateTo('Imazapyr')} style={buttonStyle}>
                                Imazapyr - Brush and Vine Control
                            </button>
                        </td>
                        <td>
                            <button onClick={() => navigateTo('Oust')} style={buttonStyle}>
                                Oust - Invasive Weed Control
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => navigateTo('Elementz')} style={buttonStyle}>
                                Elementz - Liquid Fertilizer
                            </button>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Home;