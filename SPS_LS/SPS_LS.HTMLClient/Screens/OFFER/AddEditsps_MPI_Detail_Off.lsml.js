/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditsps_MPI_Detail_Off.beforeApplyChanges = function (screen) {
    // Write code here.
    screen.sps_MPI_Detail_Off.IMIRNO = screen.IMIRNoProperty.IMIRNo;
    screen.sps_MPI_Detail_Off.Part_No_l2_Drg_BOQ = screen.PartNoProperty.Part_No;
    screen.sps_MPI_Detail_Off.IDNO = screen.IMIRNoProperty.IDCode;
    screen.sps_MPI_Detail_Off.HeatNo = screen.IMIRNoProperty.HeatNo;
};