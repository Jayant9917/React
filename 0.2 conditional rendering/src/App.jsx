

function App() {
  return (
    <div style={{backgroundColor: '#95a5a6', height: '100vh'}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <div>
            <PostComponent
            name = {'Jay Rana'}
            subtitle={"30 followers"}
            time={"30 min"}
            image={"https://picsum.photos/200/200"}
            description={"check out my github profile and you will see whats happening and how it is happening"}
            />
            <br/>
          </div>
          <div>
            <PostComponent
            name = {'ishbchbwha'}
            subtitle={"Promoted"}
            image={"https://picsum.photos/200/200"}
            description={"rofilfsg irhbgihybrfw  wiefiwb fke and you will see whats happening and how it is happening"}
            />
          <br/>
          </div>
        </div> 
      </div>
    </div>
  )
}

// Creating a component 
function PostComponent({name, subtitle, time, image, description}){
  // Strick styling
  return <div style ={{width: 200, backgroundColor: 'white', borderRadius : 10, borderColor: 'gray',borderWidth: 1, padding: 20, marginTop: 40}}>
    <div style={{display: 'flex'}}>
      <img src={image} alt="picsum"  style={{
        width:40, 
        height:40, 
        borderRadius: 20, 
        marginRight: 10
        }}/>
        <div style = {{fontSize:12, marginLeft: 10}}>
          <b>
          {name}
          </b>
          <div>{subtitle}  </div>
          {time !== undefined && <div style={{display: 'flex'}}>
            <div>{time}</div>
            <img src={"https://cdn-icons-png.flaticon.com/512/2972/2972546.png"} 
            style={{
              width: 14, 
              height: 10, 
              marginLeft: 3
              }}/>
          </div>}
        </div>
    </div>
    <div style={{fontSize: 14, fontWeight: 500, marginTop: 10}}>
    {description}
    </div>
  </div>

}

export default App
