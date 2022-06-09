
const Location = ({locationInfo, setLocationId, searchLocation,locationId}) => {

    //creamos el estado y la funcion con que vamos a capturar los datos traidos del input

    return (
        <div>
            <div>
                <h2 className="text-center">{locationInfo.name}</h2>
                <div className="row">
                    <p className="col-sm-4 text-center"><b>Type:</b> {locationInfo.type}</p>
                    <p className="col-sm-4 text-center"><b>Dimesion:</b> {locationInfo.dimension}</p>
                    <p className="col-sm-4 text-center"><b>Residents:</b> {locationInfo.residents?.length}</p>
                </div>
                
            </div>
            <input
                type="number"
                placeholder='type a location'
                //usamos el atributo on change para capturar el valor del input
                onChange={e => setLocationId(e.target.value)} 
                value={locationId}
            />
            <button onClick={searchLocation}>Search</button>
        </div>
    );
};

export default Location;