var R : float = 40;
var StaticCameraY : float = 60;
var angle : float=0;
var target : Vector3;

function Update() {
	target = new Vector3(162.94,15,126);
	transform.LookAt(target);
	transform.position.z = 126 - R*Mathf.Cos(angle*(Mathf.PI/180.0));
	transform.position.x = 162 - R*Mathf.Sin(angle*(Mathf.PI/180.0));
	angle= angle + 0.5;
	angle = angle%360;
}

function LateUpdate() {
	GetComponent.<Camera>().main.transform.position.y = StaticCameraY;
}