/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditsps_FTUDetail.beforeApplyChanges = function (screen) {
    // Write code here.
    screen.sps_FTUDetail.Drg_ID_l2_DrgList = screen.DrgNoProperty.Drg_ID;
    screen.sps_FTUDetail.Joint_ID_I2_Joints = screen.JointNoProperty.Joint_ID;
    screen.sps_FTUDetail.Part1 = screen.JointNoProperty.Part1;
    screen.sps_FTUDetail.Part2 = screen.JointNoProperty.Part2;
    screen.sps_FTUDetail.Part3 = screen.JointNoProperty.Part3;
    screen.sps_FTUDetail.Part4 = screen.JointNoProperty.Part4;
    screen.sps_FTUDetail.Part5 = screen.JointNoProperty.Part5;
    screen.sps_FTUDetail.SizeThk = screen.JointNoProperty.Length + "X" + screen.JointNoProperty.Thickness;

};