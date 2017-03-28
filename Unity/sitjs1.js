#pragma strict

var kamar : GameObject;
var left_knee : GameObject;
var right_knee: GameObject;
var left_hip: GameObject;
var right_hip: GameObject;

var flag : int = 0;
var Xpos : float;
var Ypos : float;
var Zpos : float;

function Start () {
	Xpos = transform.position.x;
	Ypos = transform.position.y;
	Zpos = transform.position.z;
}

function Update () {
	if (Input.GetKeyDown ("g")) {
			flag = 1;
		}

		if (Input.GetKeyUp ("g")) {
			flag = 0;
		}

		if (flag == 1) {
			Ypos -= 0.01;
			Xpos += 0.015;	
			this.transform.position = new Vector3(Xpos, Ypos, Zpos);
			left_hip.transform.Rotate (0, 0, 1);
			right_hip.transform.Rotate (0, 0, 1);
			left_knee.transform.Rotate (0, 0, -1);
			right_knee.transform.Rotate (0, 0, -1);
		}
}
