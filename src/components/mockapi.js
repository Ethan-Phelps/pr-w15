const LINK = "https://64441b93466f7c2b4b61f2d4.mockapi.io/pieces";

class Source{
    get = async function(){
        try{const r = await fetch(LINK); 
            return await r.json();
        }catch(e){alert("get error");}}
     post = async function(piece){
        try{const r = await fetch(LINK,{
                method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(piece)
            });return await r.json();
        }catch(e){alert("post error");}} 
    edit = async function(piece){
        try{const r = await fetch(LINK+"/"+piece.id,{
                method: "PUT", headers: {"Content-Type":"application/json"}, body: JSON.stringify(piece)
            });return await r.json();
        }catch(e){alert("post error");}}
    putp = async function(id){
        try{const r = await fetch(LINK+"/"+id,{
                method: "PUT", headers: {"Content-Type":"application/json"}, body: JSON.stringify({status: true})
            });return await r.json();
        }catch(e){alert("putp error");}}
    putd = async function(id){
        try{const r = await fetch(LINK+"/"+id,{
                method: "PUT", headers: {"Content-Type":"application/json"}, body: JSON.stringify({status: false})
            });return await r.json();
        }catch(e){alert("putd error");}}
    del = async function(id){
        try{const r = await fetch(LINK+"/"+id,{
                method: "DELETE" 
            });return await r.json();
        }catch(e){alert("del error");}} 
}export const source = new Source();