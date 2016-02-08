/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Browsesps_Projects.created = function (screen) {
    // Write code here.
    screen.findContentItem("Menu").isEnabled = false;
    var module = screen.ModuleProjectQuery;
    module.addChangeListener("", function () {
        if (module.selectedItem != null && module.selectedItem != undefined) {
            screen.findContentItem("Menu").isEnabled = true;
            screen.para_Project_Name = screen.ProjectProperty.Project_Name;
            
        }
    });

    $.getJSON("../api/UserInfo/",
               function (data) {
                   if (data != null) {
                       $.each(data, function (key, val) {
                           //window.globalPlant = val.Plant;
                           //window.globalUserID = val.UserID;
                           screen.para_User_ID = val.UserID;
                           screen.para_ProjectID = val.Project_ID;
                           screen.para_User_Name = val.UserName;
                           screen.para_IMIRProjectID = val.IMIR_Project_ID;
                           screen.para_Plant = val.Plant;
                           screen.para_Project_Name = val.Project_Name;
                       });

                   }

               })

    //screen.sps_Projects.addChangeListener("", function () {
    //    if (screen.sps_Projects.selectedItem.Project_Name != null && screen.sps_Projects.selectedItem.Project_Name!=undefined) {
    //        try {
    //            screen.para_Project_Name = screen.sps_Projects.selectedItem.Project_Name;
    //            alert(screen.para_Project_Name)
    //        }
    //        catch (ex) {

    //        }
    //    }



    //});
}

