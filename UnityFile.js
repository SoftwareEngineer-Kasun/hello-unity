#pragma strict
//Initalized Prototypes............
private var m_V:float;
private var smooth_value:float=20;
var final_Dist:float;
var count:float;
var start_pos:Vector3;
var end_pos:Vector3;
var Lerp_Count:float=0;
var lerp:float;
//*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*//
function Awake(){
lerp=1/smooth_value;
start_pos=GameObject.FindWithTag("f1").transform.position;
end_pos=GameObject.FindWithTag("f2").transform.position;
m_V=Vector3.Distance(GameObject.FindWithTag("f1").transform.position,GameObject.FindWithTag("f2").transform.position);
}
//*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*//
function VectorMove(){
for(count=0;count<smooth_value;count++){
Lerp_Count=Lerp_Count+lerp;
GameObject.FindWithTag("f1").transform.position=Vector3.Lerp(start_pos,end_pos,Lerp_Count);
         if(count==smooth_value){
         final_Dist=Vector3.Distance(start_pos,GameObject.FindWithTag("f1").transform.position);
             if(final_Dist<m_V){
             GameObject.FindWithTag("f1").transform.position=GameObject.FindWithTag("f2").transform.position;
              };
              if(final_Dist>m_V){
              GameObject.FindWithTag("f1").transform.position=GameObject.FindWithTag("f2").transform.position;
              };
                      };
yield;                      
} }
//*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*//
function Update(){
if(Input.GetKey(KeyCode.A)){
VectorMove();
};
}//end.
