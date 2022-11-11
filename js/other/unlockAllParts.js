(() => {
	const state = Object.values(document.querySelector("#app > div > div > div:nth-child(0)"))[0].children[0]._owner.stateNode;
    	Object.keys(state.state.unlocks).forEach((u)=>{
        	state.state.unlocks[u] = (new Array(101)).fill(null).map((x, i)=>i);
    	});
    	state.setState({base:0});
})();
