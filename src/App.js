import cafedata from './JsonFile/cafedata.json';
import placedata from './JsonFile/placedata.json';
import './App.css';


function App() {

  //Question 1:  Implementation 
  function findCaliforniaCafes(str) {
    // You can store the given arrays in 2 internal variables
    var cafes = cafedata;
    var places = placedata;

    // Your code goes here
    var ans = [];
    var cafeName = [];
    var placeId = [];

    
    cafes.map((s) =>{
       var p = s.name;
      if(p.match(str)){
          cafeName.push(p);
          placeId.push(s.place_id)
      }
    });
    
    // console.log(cafeName);
    // console.log(placeId);
    places.map((item)=>{
       for (const i in placeId) {
          if(item.id === placeId[i]){
              var obj = {};
              obj.name = cafeName[i];
              obj.street_no = item.street_no;
              obj.locality = item.locality;
              obj.postal_code = item.postal_code;
              obj.lat = item.lat;
              obj.long = item.long;
              
              ans.push(obj);
          }
       }
    });

    return ans;
  }
  
  const newArr = findCaliforniaCafes("Avenue"); // search cafes here
  // console.log(newArr);
  return (
    <div className="App">
      
      {
        newArr.length > 0 ? newArr.map((item,i)=>
          <div key={i} className="placeContainer">
            <h3>Place {i+1}</h3>
            <p>"name":"{item.name}"</p>
            <p>"street_no":"{item.street_no}"</p>
            <p>"locality":"{item.locality}"</p>
            <p>"postal_code":"{item.postal_code}"</p>
            <p>"lat":"{item.lat}"</p>
            <p>"long":"{item.long}"</p>
            <hr/>
          </div>
        )
        :
        <div>
          <p>Sorry!, No Data are available at the moment.</p>
        </div>
      }

    </div> 
  );
}

export default App;
