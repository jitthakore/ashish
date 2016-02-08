/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function FITUP_ACCEPT_MAIN(entitySet) {
        /// <summary>
        /// Represents the FITUP_ACCEPT_MAIN entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this fITUP_ACCEPT_MAIN.
        /// </param>
        /// <field name="FTU_No" type="String">
        /// Gets or sets the fTU_No for this fITUP_ACCEPT_MAIN.
        /// </field>
        /// <field name="FTU_Date" type="Date">
        /// Gets or sets the fTU_Date for this fITUP_ACCEPT_MAIN.
        /// </field>
        /// <field name="Insp_PlanDate" type="Date">
        /// Gets or sets the insp_PlanDate for this fITUP_ACCEPT_MAIN.
        /// </field>
        /// <field name="Module_Name" type="String">
        /// Gets or sets the module_Name for this fITUP_ACCEPT_MAIN.
        /// </field>
        /// <field name="UserName" type="String">
        /// Gets or sets the userName for this fITUP_ACCEPT_MAIN.
        /// </field>
        /// <field name="Contractor" type="String">
        /// Gets or sets the contractor for this fITUP_ACCEPT_MAIN.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this fITUP_ACCEPT_MAIN.
        /// </field>
        /// <field name="details" type="msls.application.FITUP_ACCEPT_MAIN.Details">
        /// Gets the details for this fITUP_ACCEPT_MAIN.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function GET_CONTRACTOR(entitySet) {
        /// <summary>
        /// Represents the GET_CONTRACTOR entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this gET_CONTRACTOR.
        /// </param>
        /// <field name="Contractor_ID" type="String">
        /// Gets or sets the contractor_ID for this gET_CONTRACTOR.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this gET_CONTRACTOR.
        /// </field>
        /// <field name="Contractor_Name" type="String">
        /// Gets or sets the contractor_Name for this gET_CONTRACTOR.
        /// </field>
        /// <field name="details" type="msls.application.GET_CONTRACTOR.Details">
        /// Gets the details for this gET_CONTRACTOR.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Get_FTU_For_inspect_closed(entitySet) {
        /// <summary>
        /// Represents the Get_FTU_For_inspect_closed entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this get_FTU_For_inspect_closed.
        /// </param>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Drg_ID1" type="String">
        /// Gets or sets the drg_ID1 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Part1" type="String">
        /// Gets or sets the part1 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Part2" type="String">
        /// Gets or sets the part2 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Part3" type="String">
        /// Gets or sets the part3 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Part4" type="String">
        /// Gets or sets the part4 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Part5" type="String">
        /// Gets or sets the part5 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="IMIRNO1" type="String">
        /// Gets or sets the iMIRNO1 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="IMIRNO2" type="String">
        /// Gets or sets the iMIRNO2 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="IMIRNO3" type="String">
        /// Gets or sets the iMIRNO3 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="IMIRNO4" type="String">
        /// Gets or sets the iMIRNO4 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="IMIRNO5" type="String">
        /// Gets or sets the iMIRNO5 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="IDNO1" type="String">
        /// Gets or sets the iDNO1 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="IDNO2" type="String">
        /// Gets or sets the iDNO2 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="IDNO3" type="String">
        /// Gets or sets the iDNO3 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="IDNO4" type="String">
        /// Gets or sets the iDNO4 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="IDNO5" type="String">
        /// Gets or sets the iDNO5 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="HeatNo1" type="String">
        /// Gets or sets the heatNo1 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="HeatNo2" type="String">
        /// Gets or sets the heatNo2 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="HeatNo3" type="String">
        /// Gets or sets the heatNo3 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="HeatNo4" type="String">
        /// Gets or sets the heatNo4 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="HeatNo5" type="String">
        /// Gets or sets the heatNo5 for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="FTU_No" type="String">
        /// Gets or sets the fTU_No for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="EXEC_Remark" type="String">
        /// Gets or sets the eXEC_Remark for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="FTU_Date" type="Date">
        /// Gets or sets the fTU_Date for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Remark_Detail" type="String">
        /// Gets or sets the remark_Detail for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="DCN_No" type="String">
        /// Gets or sets the dCN_No for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="WPS" type="String">
        /// Gets or sets the wPS for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Weld_Process" type="String">
        /// Gets or sets the weld_Process for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="Joint_Category" type="String">
        /// Gets or sets the joint_Category for this get_FTU_For_inspect_closed.
        /// </field>
        /// <field name="details" type="msls.application.Get_FTU_For_inspect_closed.Details">
        /// Gets the details for this get_FTU_For_inspect_closed.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function GET_INSPECT_For_WVF(entitySet) {
        /// <summary>
        /// Represents the GET_INSPECT_For_WVF entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this gET_INSPECT_For_WVF.
        /// </param>
        /// <field name="WVF_No" type="String">
        /// Gets or sets the wVF_No for this gET_INSPECT_For_WVF.
        /// </field>
        /// <field name="WVF_Date" type="Date">
        /// Gets or sets the wVF_Date for this gET_INSPECT_For_WVF.
        /// </field>
        /// <field name="Insp_PlanDate" type="Date">
        /// Gets or sets the insp_PlanDate for this gET_INSPECT_For_WVF.
        /// </field>
        /// <field name="Module_Name" type="String">
        /// Gets or sets the module_Name for this gET_INSPECT_For_WVF.
        /// </field>
        /// <field name="UserName" type="String">
        /// Gets or sets the userName for this gET_INSPECT_For_WVF.
        /// </field>
        /// <field name="Contractor" type="String">
        /// Gets or sets the contractor for this gET_INSPECT_For_WVF.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this gET_INSPECT_For_WVF.
        /// </field>
        /// <field name="details" type="msls.application.GET_INSPECT_For_WVF.Details">
        /// Gets the details for this gET_INSPECT_For_WVF.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function GET_INSPECT_MPI_AFTERaccept(entitySet) {
        /// <summary>
        /// Represents the GET_INSPECT_MPI_AFTERaccept entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this gET_INSPECT_MPI_AFTERaccept.
        /// </param>
        /// <field name="MPI_No" type="String">
        /// Gets or sets the mPI_No for this gET_INSPECT_MPI_AFTERaccept.
        /// </field>
        /// <field name="MPI_Date" type="Date">
        /// Gets or sets the mPI_Date for this gET_INSPECT_MPI_AFTERaccept.
        /// </field>
        /// <field name="Insp_PlanDate" type="Date">
        /// Gets or sets the insp_PlanDate for this gET_INSPECT_MPI_AFTERaccept.
        /// </field>
        /// <field name="Module_ID_l2_Module" type="String">
        /// Gets or sets the module_ID_l2_Module for this gET_INSPECT_MPI_AFTERaccept.
        /// </field>
        /// <field name="Module_Name" type="String">
        /// Gets or sets the module_Name for this gET_INSPECT_MPI_AFTERaccept.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this gET_INSPECT_MPI_AFTERaccept.
        /// </field>
        /// <field name="details" type="msls.application.GET_INSPECT_MPI_AFTERaccept.Details">
        /// Gets the details for this gET_INSPECT_MPI_AFTERaccept.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function GET_MPI_INSPECT(entitySet) {
        /// <summary>
        /// Represents the GET_MPI_INSPECT entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this gET_MPI_INSPECT.
        /// </param>
        /// <field name="MPI_No" type="String">
        /// Gets or sets the mPI_No for this gET_MPI_INSPECT.
        /// </field>
        /// <field name="MPI_Date" type="Date">
        /// Gets or sets the mPI_Date for this gET_MPI_INSPECT.
        /// </field>
        /// <field name="Insp_PlanDate" type="Date">
        /// Gets or sets the insp_PlanDate for this gET_MPI_INSPECT.
        /// </field>
        /// <field name="Module_ID_l2_Module" type="String">
        /// Gets or sets the module_ID_l2_Module for this gET_MPI_INSPECT.
        /// </field>
        /// <field name="Module_Name" type="String">
        /// Gets or sets the module_Name for this gET_MPI_INSPECT.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this gET_MPI_INSPECT.
        /// </field>
        /// <field name="Contractor" type="String">
        /// Gets or sets the contractor for this gET_MPI_INSPECT.
        /// </field>
        /// <field name="details" type="msls.application.GET_MPI_INSPECT.Details">
        /// Gets the details for this gET_MPI_INSPECT.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function GET_PWHT_INSPECT_ACCEPT(entitySet) {
        /// <summary>
        /// Represents the GET_PWHT_INSPECT_ACCEPT entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this gET_PWHT_INSPECT_ACCEPT.
        /// </param>
        /// <field name="PWHT_No" type="String">
        /// Gets or sets the pWHT_No for this gET_PWHT_INSPECT_ACCEPT.
        /// </field>
        /// <field name="DrgNo" type="String">
        /// Gets or sets the drgNo for this gET_PWHT_INSPECT_ACCEPT.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this gET_PWHT_INSPECT_ACCEPT.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this gET_PWHT_INSPECT_ACCEPT.
        /// </field>
        /// <field name="PWHT_Date" type="Date">
        /// Gets or sets the pWHT_Date for this gET_PWHT_INSPECT_ACCEPT.
        /// </field>
        /// <field name="Authorize_date" type="Date">
        /// Gets or sets the authorize_date for this gET_PWHT_INSPECT_ACCEPT.
        /// </field>
        /// <field name="Authorize_By" type="String">
        /// Gets or sets the authorize_By for this gET_PWHT_INSPECT_ACCEPT.
        /// </field>
        /// <field name="Module_Name" type="String">
        /// Gets or sets the module_Name for this gET_PWHT_INSPECT_ACCEPT.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this gET_PWHT_INSPECT_ACCEPT.
        /// </field>
        /// <field name="details" type="msls.application.GET_PWHT_INSPECT_ACCEPT.Details">
        /// Gets the details for this gET_PWHT_INSPECT_ACCEPT.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function GET_PWHT_JOINT_ACCEPT(entitySet) {
        /// <summary>
        /// Represents the GET_PWHT_JOINT_ACCEPT entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this gET_PWHT_JOINT_ACCEPT.
        /// </param>
        /// <field name="PWHT_No" type="String">
        /// Gets or sets the pWHT_No for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Module_Name" type="String">
        /// Gets or sets the module_Name for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Authorize_date" type="Date">
        /// Gets or sets the authorize_date for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Authorize_By" type="String">
        /// Gets or sets the authorize_By for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="DrgNo" type="String">
        /// Gets or sets the drgNo for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Rev" type="String">
        /// Gets or sets the rev for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="SizeThk" type="String">
        /// Gets or sets the sizeThk for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Heat_Treatment" type="String">
        /// Gets or sets the heat_Treatment for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Loading_Temp" type="String">
        /// Gets or sets the loading_Temp for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Rate_Of_Heating" type="String">
        /// Gets or sets the rate_Of_Heating for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Soaking_Temp" type="String">
        /// Gets or sets the soaking_Temp for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Soaking_Peroid" type="String">
        /// Gets or sets the soaking_Peroid for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Rate_Of_Cooling" type="String">
        /// Gets or sets the rate_Of_Cooling for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Unloading_Temp" type="String">
        /// Gets or sets the unloading_Temp for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="Remark_QA_Det" type="String">
        /// Gets or sets the remark_QA_Det for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="QA_Remark" type="String">
        /// Gets or sets the qA_Remark for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        /// <field name="details" type="msls.application.GET_PWHT_JOINT_ACCEPT.Details">
        /// Gets the details for this gET_PWHT_JOINT_ACCEPT.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function GET_QC_INSPECT_MPI(entitySet) {
        /// <summary>
        /// Represents the GET_QC_INSPECT_MPI entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this gET_QC_INSPECT_MPI.
        /// </param>
        /// <field name="Module_Name" type="String">
        /// Gets or sets the module_Name for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Contractor_Name" type="String">
        /// Gets or sets the contractor_Name for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Contractor_ID" type="String">
        /// Gets or sets the contractor_ID for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Sr_No" type="String">
        /// Gets or sets the sr_No for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Drg_ID_l2_DrgList" type="String">
        /// Gets or sets the drg_ID_l2_DrgList for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Drg_ID_l2_DrgList1" type="String">
        /// Gets or sets the drg_ID_l2_DrgList1 for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="RevID" type="String">
        /// Gets or sets the revID for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="DCN_No" type="String">
        /// Gets or sets the dCN_No for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="PARTNO" type="String">
        /// Gets or sets the pARTNO for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Qty_Offer" type="String">
        /// Gets or sets the qty_Offer for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Remark_Off_Det" type="String">
        /// Gets or sets the remark_Off_Det for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Qty_Req" type="String">
        /// Gets or sets the qty_Req for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Acc_Qty" type="String">
        /// Gets or sets the acc_Qty for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Stock" type="String">
        /// Gets or sets the stock for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Mat_Desc" type="String">
        /// Gets or sets the mat_Desc for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Material" type="String">
        /// Gets or sets the material for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Size_Desc" type="String">
        /// Gets or sets the size_Desc for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="MPI_Date" type="Date">
        /// Gets or sets the mPI_Date for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Remark" type="String">
        /// Gets or sets the remark for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="IDMark" type="String">
        /// Gets or sets the iDMark for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="IDUsed" type="String">
        /// Gets or sets the iDUsed for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="IMIRNO" type="String">
        /// Gets or sets the iMIRNO for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="IDNO" type="String">
        /// Gets or sets the iDNO for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="HeatNo" type="String">
        /// Gets or sets the heatNo for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Qty_Accepted" type="String">
        /// Gets or sets the qty_Accepted for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="Qty_Rejected" type="String">
        /// Gets or sets the qty_Rejected for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="MPI_No" type="String">
        /// Gets or sets the mPI_No for this gET_QC_INSPECT_MPI.
        /// </field>
        /// <field name="details" type="msls.application.GET_QC_INSPECT_MPI.Details">
        /// Gets the details for this gET_QC_INSPECT_MPI.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Hardness_offer_get(entitySet) {
        /// <summary>
        /// Represents the Hardness_offer_get entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this hardness_offer_get.
        /// </param>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this hardness_offer_get.
        /// </field>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this hardness_offer_get.
        /// </field>
        /// <field name="Drg_ID_l2_DrgList" type="String">
        /// Gets or sets the drg_ID_l2_DrgList for this hardness_offer_get.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this hardness_offer_get.
        /// </field>
        /// <field name="Rev" type="String">
        /// Gets or sets the rev for this hardness_offer_get.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this hardness_offer_get.
        /// </field>
        /// <field name="details" type="msls.application.Hardness_offer_get.Details">
        /// Gets the details for this hardness_offer_get.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Inspect_WVF_Detail(entitySet) {
        /// <summary>
        /// Represents the Inspect_WVF_Detail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this inspect_WVF_Detail.
        /// </param>
        /// <field name="Project_ID" type="String">
        /// Gets or sets the project_ID for this inspect_WVF_Detail.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this inspect_WVF_Detail.
        /// </field>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this inspect_WVF_Detail.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this inspect_WVF_Detail.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this inspect_WVF_Detail.
        /// </field>
        /// <field name="FTU_No_l2_FTU" type="String">
        /// Gets or sets the fTU_No_l2_FTU for this inspect_WVF_Detail.
        /// </field>
        /// <field name="WVF_No" type="String">
        /// Gets or sets the wVF_No for this inspect_WVF_Detail.
        /// </field>
        /// <field name="EXEC_Remark" type="String">
        /// Gets or sets the eXEC_Remark for this inspect_WVF_Detail.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this inspect_WVF_Detail.
        /// </field>
        /// <field name="WVF_Date" type="Date">
        /// Gets or sets the wVF_Date for this inspect_WVF_Detail.
        /// </field>
        /// <field name="WPS_l2_WPS" type="String">
        /// Gets or sets the wPS_l2_WPS for this inspect_WVF_Detail.
        /// </field>
        /// <field name="Weld_Process" type="String">
        /// Gets or sets the weld_Process for this inspect_WVF_Detail.
        /// </field>
        /// <field name="Welder" type="String">
        /// Gets or sets the welder for this inspect_WVF_Detail.
        /// </field>
        /// <field name="Remark_Det" type="String">
        /// Gets or sets the remark_Det for this inspect_WVF_Detail.
        /// </field>
        /// <field name="DCN_No" type="String">
        /// Gets or sets the dCN_No for this inspect_WVF_Detail.
        /// </field>
        /// <field name="flg_RT" type="String">
        /// Gets or sets the flg_RT for this inspect_WVF_Detail.
        /// </field>
        /// <field name="flg_UT" type="String">
        /// Gets or sets the flg_UT for this inspect_WVF_Detail.
        /// </field>
        /// <field name="flg_MT" type="String">
        /// Gets or sets the flg_MT for this inspect_WVF_Detail.
        /// </field>
        /// <field name="flg_PT" type="String">
        /// Gets or sets the flg_PT for this inspect_WVF_Detail.
        /// </field>
        /// <field name="flg_PA_UT" type="String">
        /// Gets or sets the flg_PA_UT for this inspect_WVF_Detail.
        /// </field>
        /// <field name="flg_TOFD_UT" type="String">
        /// Gets or sets the flg_TOFD_UT for this inspect_WVF_Detail.
        /// </field>
        /// <field name="RT_Per" type="String">
        /// Gets or sets the rT_Per for this inspect_WVF_Detail.
        /// </field>
        /// <field name="UT_Per" type="String">
        /// Gets or sets the uT_Per for this inspect_WVF_Detail.
        /// </field>
        /// <field name="MT_Per" type="String">
        /// Gets or sets the mT_Per for this inspect_WVF_Detail.
        /// </field>
        /// <field name="PT_Per" type="String">
        /// Gets or sets the pT_Per for this inspect_WVF_Detail.
        /// </field>
        /// <field name="PA_UT_Per" type="String">
        /// Gets or sets the pA_UT_Per for this inspect_WVF_Detail.
        /// </field>
        /// <field name="TOFD_UT_Per" type="String">
        /// Gets or sets the tOFD_UT_Per for this inspect_WVF_Detail.
        /// </field>
        /// <field name="RT_Status" type="String">
        /// Gets or sets the rT_Status for this inspect_WVF_Detail.
        /// </field>
        /// <field name="UT_Status" type="String">
        /// Gets or sets the uT_Status for this inspect_WVF_Detail.
        /// </field>
        /// <field name="MT_Status" type="String">
        /// Gets or sets the mT_Status for this inspect_WVF_Detail.
        /// </field>
        /// <field name="PT_Status" type="String">
        /// Gets or sets the pT_Status for this inspect_WVF_Detail.
        /// </field>
        /// <field name="PA_UT_Status" type="String">
        /// Gets or sets the pA_UT_Status for this inspect_WVF_Detail.
        /// </field>
        /// <field name="TOFD_UT_Status" type="String">
        /// Gets or sets the tOFD_UT_Status for this inspect_WVF_Detail.
        /// </field>
        /// <field name="NDE_Per_Type" type="String">
        /// Gets or sets the nDE_Per_Type for this inspect_WVF_Detail.
        /// </field>
        /// <field name="DefLength" type="String">
        /// Gets or sets the defLength for this inspect_WVF_Detail.
        /// </field>
        /// <field name="Desg" type="String">
        /// Gets or sets the desg for this inspect_WVF_Detail.
        /// </field>
        /// <field name="NDEPLan" type="String">
        /// Gets or sets the nDEPLan for this inspect_WVF_Detail.
        /// </field>
        /// <field name="Joint_Category" type="String">
        /// Gets or sets the joint_Category for this inspect_WVF_Detail.
        /// </field>
        /// <field name="Joint_Config" type="String">
        /// Gets or sets the joint_Config for this inspect_WVF_Detail.
        /// </field>
        /// <field name="Length1" type="String">
        /// Gets or sets the length1 for this inspect_WVF_Detail.
        /// </field>
        /// <field name="details" type="msls.application.Inspect_WVF_Detail.Details">
        /// Gets the details for this inspect_WVF_Detail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_Contractor_Module(entitySet) {
        /// <summary>
        /// Represents the sps_Contractor_Module entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_Contractor_Module.
        /// </param>
        /// <field name="Contractor_ID_l2_Contractor" type="String">
        /// Gets or sets the contractor_ID_l2_Contractor for this sps_Contractor_Module.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this sps_Contractor_Module.
        /// </field>
        /// <field name="sps_Contractor" type="msls.application.sps_Contractor">
        /// Gets or sets the sps_Contractor for this sps_Contractor_Module.
        /// </field>
        /// <field name="sps_Module" type="msls.application.sps_Module">
        /// Gets or sets the sps_Module for this sps_Contractor_Module.
        /// </field>
        /// <field name="sps_FTUs" type="msls.EntityCollection" elementType="msls.application.sps_FTU">
        /// Gets the sps_FTUs for this sps_Contractor_Module.
        /// </field>
        /// <field name="sps_Hardnesses" type="msls.EntityCollection" elementType="msls.application.sps_Hardness">
        /// Gets the sps_Hardnesses for this sps_Contractor_Module.
        /// </field>
        /// <field name="sps_MCRs" type="msls.EntityCollection" elementType="msls.application.sps_MCR">
        /// Gets the sps_MCRs for this sps_Contractor_Module.
        /// </field>
        /// <field name="sps_MPIs" type="msls.EntityCollection" elementType="msls.application.sps_MPI">
        /// Gets the sps_MPIs for this sps_Contractor_Module.
        /// </field>
        /// <field name="sps_NDEReqs" type="msls.EntityCollection" elementType="msls.application.sps_NDEReq">
        /// Gets the sps_NDEReqs for this sps_Contractor_Module.
        /// </field>
        /// <field name="sps_RR_WVFs" type="msls.EntityCollection" elementType="msls.application.sps_RR_WVF">
        /// Gets the sps_RR_WVFs for this sps_Contractor_Module.
        /// </field>
        /// <field name="sps_WVFs" type="msls.EntityCollection" elementType="msls.application.sps_WVF">
        /// Gets the sps_WVFs for this sps_Contractor_Module.
        /// </field>
        /// <field name="details" type="msls.application.sps_Contractor_Module.Details">
        /// Gets the details for this sps_Contractor_Module.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_Contractor(entitySet) {
        /// <summary>
        /// Represents the sps_Contractor entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_Contractor.
        /// </param>
        /// <field name="Plant" type="String">
        /// Gets or sets the plant for this sps_Contractor.
        /// </field>
        /// <field name="Contractor_ID" type="String">
        /// Gets or sets the contractor_ID for this sps_Contractor.
        /// </field>
        /// <field name="Contractor_Name" type="String">
        /// Gets or sets the contractor_Name for this sps_Contractor.
        /// </field>
        /// <field name="Address" type="String">
        /// Gets or sets the address for this sps_Contractor.
        /// </field>
        /// <field name="Contact_No" type="String">
        /// Gets or sets the contact_No for this sps_Contractor.
        /// </field>
        /// <field name="Active" type="Boolean">
        /// Gets or sets the active for this sps_Contractor.
        /// </field>
        /// <field name="New_ID" type="String">
        /// Gets or sets the new_ID for this sps_Contractor.
        /// </field>
        /// <field name="sps_Contractor_Modules" type="msls.EntityCollection" elementType="msls.application.sps_Contractor_Module">
        /// Gets the sps_Contractor_Modules for this sps_Contractor.
        /// </field>
        /// <field name="details" type="msls.application.sps_Contractor.Details">
        /// Gets the details for this sps_Contractor.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_DrgList(entitySet) {
        /// <summary>
        /// Represents the sps_DrgList entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_DrgList.
        /// </param>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this sps_DrgList.
        /// </field>
        /// <field name="Drg_No_MFF" type="String">
        /// Gets or sets the drg_No_MFF for this sps_DrgList.
        /// </field>
        /// <field name="Drg_No_Client" type="String">
        /// Gets or sets the drg_No_Client for this sps_DrgList.
        /// </field>
        /// <field name="Drg_No_PMT" type="String">
        /// Gets or sets the drg_No_PMT for this sps_DrgList.
        /// </field>
        /// <field name="Rev" type="String">
        /// Gets or sets the rev for this sps_DrgList.
        /// </field>
        /// <field name="Sheet_No" type="String">
        /// Gets or sets the sheet_No for this sps_DrgList.
        /// </field>
        /// <field name="Total_Sheets" type="String">
        /// Gets or sets the total_Sheets for this sps_DrgList.
        /// </field>
        /// <field name="OnDate" type="Date">
        /// Gets or sets the onDate for this sps_DrgList.
        /// </field>
        /// <field name="Drg_Status" type="Number">
        /// Gets or sets the drg_Status for this sps_DrgList.
        /// </field>
        /// <field name="UserID" type="String">
        /// Gets or sets the userID for this sps_DrgList.
        /// </field>
        /// <field name="Edited_By" type="String">
        /// Gets or sets the edited_By for this sps_DrgList.
        /// </field>
        /// <field name="Edited_Date" type="Date">
        /// Gets or sets the edited_Date for this sps_DrgList.
        /// </field>
        /// <field name="Deleted_By" type="String">
        /// Gets or sets the deleted_By for this sps_DrgList.
        /// </field>
        /// <field name="Deleted_Date" type="Date">
        /// Gets or sets the deleted_Date for this sps_DrgList.
        /// </field>
        /// <field name="ICSNO" type="String">
        /// Gets or sets the iCSNO for this sps_DrgList.
        /// </field>
        /// <field name="ICSDate" type="Date">
        /// Gets or sets the iCSDate for this sps_DrgList.
        /// </field>
        /// <field name="Drg_Title" type="String">
        /// Gets or sets the drg_Title for this sps_DrgList.
        /// </field>
        /// <field name="NW_MAP_Date" type="Date">
        /// Gets or sets the nW_MAP_Date for this sps_DrgList.
        /// </field>
        /// <field name="NW_MAP_REV" type="String">
        /// Gets or sets the nW_MAP_REV for this sps_DrgList.
        /// </field>
        /// <field name="NW_MAP_Prepared_By" type="String">
        /// Gets or sets the nW_MAP_Prepared_By for this sps_DrgList.
        /// </field>
        /// <field name="NW_MAP_Checked_Apprv_By" type="String">
        /// Gets or sets the nW_MAP_Checked_Apprv_By for this sps_DrgList.
        /// </field>
        /// <field name="NW_MAP_Reviewed_By" type="String">
        /// Gets or sets the nW_MAP_Reviewed_By for this sps_DrgList.
        /// </field>
        /// <field name="NW_MAP_REV_Lock" type="Boolean">
        /// Gets or sets the nW_MAP_REV_Lock for this sps_DrgList.
        /// </field>
        /// <field name="DIN_Current_Status" type="String">
        /// Gets or sets the dIN_Current_Status for this sps_DrgList.
        /// </field>
        /// <field name="Issue_No" type="Number">
        /// Gets or sets the issue_No for this sps_DrgList.
        /// </field>
        /// <field name="Uploaded_FilePath_PDF" type="String">
        /// Gets or sets the uploaded_FilePath_PDF for this sps_DrgList.
        /// </field>
        /// <field name="PDF_UploadedBy" type="String">
        /// Gets or sets the pDF_UploadedBy for this sps_DrgList.
        /// </field>
        /// <field name="PDF_UploadedDate" type="Date">
        /// Gets or sets the pDF_UploadedDate for this sps_DrgList.
        /// </field>
        /// <field name="Uploaded_FilePath_DWG" type="String">
        /// Gets or sets the uploaded_FilePath_DWG for this sps_DrgList.
        /// </field>
        /// <field name="DWG_UploadedBy" type="String">
        /// Gets or sets the dWG_UploadedBy for this sps_DrgList.
        /// </field>
        /// <field name="DWG_UploadedDate" type="Date">
        /// Gets or sets the dWG_UploadedDate for this sps_DrgList.
        /// </field>
        /// <field name="Drg_Weight" type="String">
        /// Gets or sets the drg_Weight for this sps_DrgList.
        /// </field>
        /// <field name="sps_Module" type="msls.application.sps_Module">
        /// Gets or sets the sps_Module for this sps_DrgList.
        /// </field>
        /// <field name="sps_MPI_Detail_Offs" type="msls.EntityCollection" elementType="msls.application.sps_MPI_Detail_Off">
        /// Gets the sps_MPI_Detail_Offs for this sps_DrgList.
        /// </field>
        /// <field name="details" type="msls.application.sps_DrgList.Details">
        /// Gets the details for this sps_DrgList.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_FTUDetail(entitySet) {
        /// <summary>
        /// Represents the sps_FTUDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_FTUDetail.
        /// </param>
        /// <field name="FTU_No_l2_FTU" type="String">
        /// Gets or sets the fTU_No_l2_FTU for this sps_FTUDetail.
        /// </field>
        /// <field name="Joint_ID_l2_Joints" type="String">
        /// Gets or sets the joint_ID_l2_Joints for this sps_FTUDetail.
        /// </field>
        /// <field name="Drg_ID_l2_DrgList" type="String">
        /// Gets or sets the drg_ID_l2_DrgList for this sps_FTUDetail.
        /// </field>
        /// <field name="Part1" type="String">
        /// Gets or sets the part1 for this sps_FTUDetail.
        /// </field>
        /// <field name="Drg_ID_2" type="String">
        /// Gets or sets the drg_ID_2 for this sps_FTUDetail.
        /// </field>
        /// <field name="Part2" type="String">
        /// Gets or sets the part2 for this sps_FTUDetail.
        /// </field>
        /// <field name="Drg_ID_3" type="String">
        /// Gets or sets the drg_ID_3 for this sps_FTUDetail.
        /// </field>
        /// <field name="Part3" type="String">
        /// Gets or sets the part3 for this sps_FTUDetail.
        /// </field>
        /// <field name="Drg_ID_4" type="String">
        /// Gets or sets the drg_ID_4 for this sps_FTUDetail.
        /// </field>
        /// <field name="Part4" type="String">
        /// Gets or sets the part4 for this sps_FTUDetail.
        /// </field>
        /// <field name="Drg_ID_5" type="String">
        /// Gets or sets the drg_ID_5 for this sps_FTUDetail.
        /// </field>
        /// <field name="Part5" type="String">
        /// Gets or sets the part5 for this sps_FTUDetail.
        /// </field>
        /// <field name="RevID" type="String">
        /// Gets or sets the revID for this sps_FTUDetail.
        /// </field>
        /// <field name="DCN_No" type="String">
        /// Gets or sets the dCN_No for this sps_FTUDetail.
        /// </field>
        /// <field name="SizeThk" type="String">
        /// Gets or sets the sizeThk for this sps_FTUDetail.
        /// </field>
        /// <field name="IMIRNO1" type="String">
        /// Gets or sets the iMIRNO1 for this sps_FTUDetail.
        /// </field>
        /// <field name="IMIRNO2" type="String">
        /// Gets or sets the iMIRNO2 for this sps_FTUDetail.
        /// </field>
        /// <field name="IMIRNO3" type="String">
        /// Gets or sets the iMIRNO3 for this sps_FTUDetail.
        /// </field>
        /// <field name="IMIRNO4" type="String">
        /// Gets or sets the iMIRNO4 for this sps_FTUDetail.
        /// </field>
        /// <field name="IMIRNO5" type="String">
        /// Gets or sets the iMIRNO5 for this sps_FTUDetail.
        /// </field>
        /// <field name="IMIRSrNO1" type="String">
        /// Gets or sets the iMIRSrNO1 for this sps_FTUDetail.
        /// </field>
        /// <field name="IMIRSrNO2" type="String">
        /// Gets or sets the iMIRSrNO2 for this sps_FTUDetail.
        /// </field>
        /// <field name="IMIRSrNO3" type="String">
        /// Gets or sets the iMIRSrNO3 for this sps_FTUDetail.
        /// </field>
        /// <field name="IMIRSrNO4" type="String">
        /// Gets or sets the iMIRSrNO4 for this sps_FTUDetail.
        /// </field>
        /// <field name="IMIRSrNO5" type="String">
        /// Gets or sets the iMIRSrNO5 for this sps_FTUDetail.
        /// </field>
        /// <field name="IDNoSAP1" type="String">
        /// Gets or sets the iDNoSAP1 for this sps_FTUDetail.
        /// </field>
        /// <field name="IDNoSAP2" type="String">
        /// Gets or sets the iDNoSAP2 for this sps_FTUDetail.
        /// </field>
        /// <field name="IDNoSAP3" type="String">
        /// Gets or sets the iDNoSAP3 for this sps_FTUDetail.
        /// </field>
        /// <field name="IDNoSAP4" type="String">
        /// Gets or sets the iDNoSAP4 for this sps_FTUDetail.
        /// </field>
        /// <field name="IDNoSAP5" type="String">
        /// Gets or sets the iDNoSAP5 for this sps_FTUDetail.
        /// </field>
        /// <field name="HeatNo1" type="String">
        /// Gets or sets the heatNo1 for this sps_FTUDetail.
        /// </field>
        /// <field name="HeatNo2" type="String">
        /// Gets or sets the heatNo2 for this sps_FTUDetail.
        /// </field>
        /// <field name="HeatNo3" type="String">
        /// Gets or sets the heatNo3 for this sps_FTUDetail.
        /// </field>
        /// <field name="HeatNo4" type="String">
        /// Gets or sets the heatNo4 for this sps_FTUDetail.
        /// </field>
        /// <field name="HeatNo5" type="String">
        /// Gets or sets the heatNo5 for this sps_FTUDetail.
        /// </field>
        /// <field name="IDNo1" type="String">
        /// Gets or sets the iDNo1 for this sps_FTUDetail.
        /// </field>
        /// <field name="IDNo2" type="String">
        /// Gets or sets the iDNo2 for this sps_FTUDetail.
        /// </field>
        /// <field name="IDNo3" type="String">
        /// Gets or sets the iDNo3 for this sps_FTUDetail.
        /// </field>
        /// <field name="IDNo4" type="String">
        /// Gets or sets the iDNo4 for this sps_FTUDetail.
        /// </field>
        /// <field name="IDNo5" type="String">
        /// Gets or sets the iDNo5 for this sps_FTUDetail.
        /// </field>
        /// <field name="MPI_No1_l2_MPI" type="String">
        /// Gets or sets the mPI_No1_l2_MPI for this sps_FTUDetail.
        /// </field>
        /// <field name="MPI_No2_l2_MPI" type="String">
        /// Gets or sets the mPI_No2_l2_MPI for this sps_FTUDetail.
        /// </field>
        /// <field name="MPI_No3_l2_MPI" type="String">
        /// Gets or sets the mPI_No3_l2_MPI for this sps_FTUDetail.
        /// </field>
        /// <field name="MPI_No4_l2_MPI" type="String">
        /// Gets or sets the mPI_No4_l2_MPI for this sps_FTUDetail.
        /// </field>
        /// <field name="MPI_No5_l2_MPI" type="String">
        /// Gets or sets the mPI_No5_l2_MPI for this sps_FTUDetail.
        /// </field>
        /// <field name="Remark_Detail" type="String">
        /// Gets or sets the remark_Detail for this sps_FTUDetail.
        /// </field>
        /// <field name="Remark_Detail_QC" type="String">
        /// Gets or sets the remark_Detail_QC for this sps_FTUDetail.
        /// </field>
        /// <field name="Deleted_By" type="String">
        /// Gets or sets the deleted_By for this sps_FTUDetail.
        /// </field>
        /// <field name="Deleted_Date" type="Date">
        /// Gets or sets the deleted_Date for this sps_FTUDetail.
        /// </field>
        /// <field name="Status" type="Number">
        /// Gets or sets the status for this sps_FTUDetail.
        /// </field>
        /// <field name="ReasonForDelete" type="String">
        /// Gets or sets the reasonForDelete for this sps_FTUDetail.
        /// </field>
        /// <field name="IMIR_ID_HeatNo_Edited_By" type="String">
        /// Gets or sets the iMIR_ID_HeatNo_Edited_By for this sps_FTUDetail.
        /// </field>
        /// <field name="IMIR_ID_HeatNo_EditedDate" type="Date">
        /// Gets or sets the iMIR_ID_HeatNo_EditedDate for this sps_FTUDetail.
        /// </field>
        /// <field name="flg_Critical_Joint" type="Boolean">
        /// Gets or sets the flg_Critical_Joint for this sps_FTUDetail.
        /// </field>
        /// <field name="ReasonForRejection" type="String">
        /// Gets or sets the reasonForRejection for this sps_FTUDetail.
        /// </field>
        /// <field name="ReasonForRejectionDesc" type="String">
        /// Gets or sets the reasonForRejectionDesc for this sps_FTUDetail.
        /// </field>
        /// <field name="sps_FTU" type="msls.application.sps_FTU">
        /// Gets or sets the sps_FTU for this sps_FTUDetail.
        /// </field>
        /// <field name="imageurl" type="String">
        /// Gets or sets the imageurl for this sps_FTUDetail.
        /// </field>
        /// <field name="details" type="msls.application.sps_FTUDetail.Details">
        /// Gets the details for this sps_FTUDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_FTU(entitySet) {
        /// <summary>
        /// Represents the sps_FTU entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_FTU.
        /// </param>
        /// <field name="FTU_No" type="String">
        /// Gets or sets the fTU_No for this sps_FTU.
        /// </field>
        /// <field name="FTU_Date" type="Date">
        /// Gets or sets the fTU_Date for this sps_FTU.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this sps_FTU.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this sps_FTU.
        /// </field>
        /// <field name="Insp_By" type="String">
        /// Gets or sets the insp_By for this sps_FTU.
        /// </field>
        /// <field name="Insp_Date" type="Date">
        /// Gets or sets the insp_Date for this sps_FTU.
        /// </field>
        /// <field name="Status" type="Number">
        /// Gets or sets the status for this sps_FTU.
        /// </field>
        /// <field name="QC_Remark" type="String">
        /// Gets or sets the qC_Remark for this sps_FTU.
        /// </field>
        /// <field name="EXEC_Remark" type="String">
        /// Gets or sets the eXEC_Remark for this sps_FTU.
        /// </field>
        /// <field name="SketchReport" type="String">
        /// Gets or sets the sketchReport for this sps_FTU.
        /// </field>
        /// <field name="IDMark" type="String">
        /// Gets or sets the iDMark for this sps_FTU.
        /// </field>
        /// <field name="IDUsed" type="String">
        /// Gets or sets the iDUsed for this sps_FTU.
        /// </field>
        /// <field name="Insp_PlanDate" type="Date">
        /// Gets or sets the insp_PlanDate for this sps_FTU.
        /// </field>
        /// <field name="sps_Contractor_Module" type="msls.application.sps_Contractor_Module">
        /// Gets or sets the sps_Contractor_Module for this sps_FTU.
        /// </field>
        /// <field name="sps_FTUDetails" type="msls.EntityCollection" elementType="msls.application.sps_FTUDetail">
        /// Gets the sps_FTUDetails for this sps_FTU.
        /// </field>
        /// <field name="details" type="msls.application.sps_FTU.Details">
        /// Gets the details for this sps_FTU.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_HardnessDetail(entitySet) {
        /// <summary>
        /// Represents the sps_HardnessDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_HardnessDetail.
        /// </param>
        /// <field name="Hardness_No" type="String">
        /// Gets or sets the hardness_No for this sps_HardnessDetail.
        /// </field>
        /// <field name="SrNo" type="String">
        /// Gets or sets the srNo for this sps_HardnessDetail.
        /// </field>
        /// <field name="Joint_ID_l2_Joints" type="String">
        /// Gets or sets the joint_ID_l2_Joints for this sps_HardnessDetail.
        /// </field>
        /// <field name="Drg_ID_l2_DrgList" type="String">
        /// Gets or sets the drg_ID_l2_DrgList for this sps_HardnessDetail.
        /// </field>
        /// <field name="RevID" type="String">
        /// Gets or sets the revID for this sps_HardnessDetail.
        /// </field>
        /// <field name="DCN_No" type="String">
        /// Gets or sets the dCN_No for this sps_HardnessDetail.
        /// </field>
        /// <field name="Base_Metal1_Max" type="String">
        /// Gets or sets the base_Metal1_Max for this sps_HardnessDetail.
        /// </field>
        /// <field name="Weld_Max" type="String">
        /// Gets or sets the weld_Max for this sps_HardnessDetail.
        /// </field>
        /// <field name="Haz_Max1" type="String">
        /// Gets or sets the haz_Max1 for this sps_HardnessDetail.
        /// </field>
        /// <field name="Base_Metal2_Max" type="String">
        /// Gets or sets the base_Metal2_Max for this sps_HardnessDetail.
        /// </field>
        /// <field name="Haz2_Max" type="String">
        /// Gets or sets the haz2_Max for this sps_HardnessDetail.
        /// </field>
        /// <field name="Remark_Detail" type="String">
        /// Gets or sets the remark_Detail for this sps_HardnessDetail.
        /// </field>
        /// <field name="Remark_Detail_QC" type="String">
        /// Gets or sets the remark_Detail_QC for this sps_HardnessDetail.
        /// </field>
        /// <field name="Deleted_By" type="String">
        /// Gets or sets the deleted_By for this sps_HardnessDetail.
        /// </field>
        /// <field name="Deleted_Date" type="Date">
        /// Gets or sets the deleted_Date for this sps_HardnessDetail.
        /// </field>
        /// <field name="Status" type="Number">
        /// Gets or sets the status for this sps_HardnessDetail.
        /// </field>
        /// <field name="ReasonForDelete" type="String">
        /// Gets or sets the reasonForDelete for this sps_HardnessDetail.
        /// </field>
        /// <field name="sps_Hardness" type="msls.application.sps_Hardness">
        /// Gets or sets the sps_Hardness for this sps_HardnessDetail.
        /// </field>
        /// <field name="details" type="msls.application.sps_HardnessDetail.Details">
        /// Gets the details for this sps_HardnessDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_Hardness(entitySet) {
        /// <summary>
        /// Represents the sps_Hardness entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_Hardness.
        /// </param>
        /// <field name="Hardness_No" type="String">
        /// Gets or sets the hardness_No for this sps_Hardness.
        /// </field>
        /// <field name="Hardness_Date" type="Date">
        /// Gets or sets the hardness_Date for this sps_Hardness.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this sps_Hardness.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this sps_Hardness.
        /// </field>
        /// <field name="Insp_By" type="String">
        /// Gets or sets the insp_By for this sps_Hardness.
        /// </field>
        /// <field name="Insp_Date" type="Date">
        /// Gets or sets the insp_Date for this sps_Hardness.
        /// </field>
        /// <field name="Status" type="Number">
        /// Gets or sets the status for this sps_Hardness.
        /// </field>
        /// <field name="QC_Remark" type="String">
        /// Gets or sets the qC_Remark for this sps_Hardness.
        /// </field>
        /// <field name="EXEC_Remark" type="String">
        /// Gets or sets the eXEC_Remark for this sps_Hardness.
        /// </field>
        /// <field name="Insp_PlanDate" type="Date">
        /// Gets or sets the insp_PlanDate for this sps_Hardness.
        /// </field>
        /// <field name="InstID_No" type="String">
        /// Gets or sets the instID_No for this sps_Hardness.
        /// </field>
        /// <field name="Cal_Due_Dt" type="Date">
        /// Gets or sets the cal_Due_Dt for this sps_Hardness.
        /// </field>
        /// <field name="AcceptanceValue" type="String">
        /// Gets or sets the acceptanceValue for this sps_Hardness.
        /// </field>
        /// <field name="sps_Contractor_Module" type="msls.application.sps_Contractor_Module">
        /// Gets or sets the sps_Contractor_Module for this sps_Hardness.
        /// </field>
        /// <field name="sps_HardnessDetails" type="msls.EntityCollection" elementType="msls.application.sps_HardnessDetail">
        /// Gets the sps_HardnessDetails for this sps_Hardness.
        /// </field>
        /// <field name="details" type="msls.application.sps_Hardness.Details">
        /// Gets the details for this sps_Hardness.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_Location(entitySet) {
        /// <summary>
        /// Represents the sps_Location entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_Location.
        /// </param>
        /// <field name="Plant" type="String">
        /// Gets or sets the plant for this sps_Location.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this sps_Location.
        /// </field>
        /// <field name="ProjectID" type="String">
        /// Gets or sets the projectID for this sps_Location.
        /// </field>
        /// <field name="Active" type="Boolean">
        /// Gets or sets the active for this sps_Location.
        /// </field>
        /// <field name="details" type="msls.application.sps_Location.Details">
        /// Gets the details for this sps_Location.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_Master_Proceduer(entitySet) {
        /// <summary>
        /// Represents the sps_Master_Proceduer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_Master_Proceduer.
        /// </param>
        /// <field name="Report_Type" type="String">
        /// Gets or sets the report_Type for this sps_Master_Proceduer.
        /// </field>
        /// <field name="Procedures" type="String">
        /// Gets or sets the procedures for this sps_Master_Proceduer.
        /// </field>
        /// <field name="ProjectID" type="String">
        /// Gets or sets the projectID for this sps_Master_Proceduer.
        /// </field>
        /// <field name="Active" type="Boolean">
        /// Gets or sets the active for this sps_Master_Proceduer.
        /// </field>
        /// <field name="details" type="msls.application.sps_Master_Proceduer.Details">
        /// Gets the details for this sps_Master_Proceduer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_Matser_CodeOfConstruction(entitySet) {
        /// <summary>
        /// Represents the sps_Matser_CodeOfConstruction entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_Matser_CodeOfConstruction.
        /// </param>
        /// <field name="Code_Of_Construction" type="String">
        /// Gets or sets the code_Of_Construction for this sps_Matser_CodeOfConstruction.
        /// </field>
        /// <field name="ProjectID" type="String">
        /// Gets or sets the projectID for this sps_Matser_CodeOfConstruction.
        /// </field>
        /// <field name="Active" type="Boolean">
        /// Gets or sets the active for this sps_Matser_CodeOfConstruction.
        /// </field>
        /// <field name="details" type="msls.application.sps_Matser_CodeOfConstruction.Details">
        /// Gets the details for this sps_Matser_CodeOfConstruction.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_MCR_Detail(entitySet) {
        /// <summary>
        /// Represents the sps_MCR_Detail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_MCR_Detail.
        /// </param>
        /// <field name="MCR_No_l2_MCR" type="String">
        /// Gets or sets the mCR_No_l2_MCR for this sps_MCR_Detail.
        /// </field>
        /// <field name="Drg_No_L2_Drg" type="String">
        /// Gets or sets the drg_No_L2_Drg for this sps_MCR_Detail.
        /// </field>
        /// <field name="Sr_No" type="String">
        /// Gets or sets the sr_No for this sps_MCR_Detail.
        /// </field>
        /// <field name="Part_No" type="String">
        /// Gets or sets the part_No for this sps_MCR_Detail.
        /// </field>
        /// <field name="MPI_No_l2_MPI" type="String">
        /// Gets or sets the mPI_No_l2_MPI for this sps_MCR_Detail.
        /// </field>
        /// <field name="SizeThk" type="String">
        /// Gets or sets the sizeThk for this sps_MCR_Detail.
        /// </field>
        /// <field name="Mat_Desc" type="String">
        /// Gets or sets the mat_Desc for this sps_MCR_Detail.
        /// </field>
        /// <field name="Imir_ID" type="String">
        /// Gets or sets the imir_ID for this sps_MCR_Detail.
        /// </field>
        /// <field name="RevID" type="String">
        /// Gets or sets the revID for this sps_MCR_Detail.
        /// </field>
        /// <field name="ID_No" type="String">
        /// Gets or sets the iD_No for this sps_MCR_Detail.
        /// </field>
        /// <field name="Heat_No" type="String">
        /// Gets or sets the heat_No for this sps_MCR_Detail.
        /// </field>
        /// <field name="Qty" type="String">
        /// Gets or sets the qty for this sps_MCR_Detail.
        /// </field>
        /// <field name="Makers_Name" type="String">
        /// Gets or sets the makers_Name for this sps_MCR_Detail.
        /// </field>
        /// <field name="Certificate_No" type="String">
        /// Gets or sets the certificate_No for this sps_MCR_Detail.
        /// </field>
        /// <field name="LTRemark_DCR_NCR" type="String">
        /// Gets or sets the lTRemark_DCR_NCR for this sps_MCR_Detail.
        /// </field>
        /// <field name="Status" type="Number">
        /// Gets or sets the status for this sps_MCR_Detail.
        /// </field>
        /// <field name="ReasonForDelete" type="String">
        /// Gets or sets the reasonForDelete for this sps_MCR_Detail.
        /// </field>
        /// <field name="Deleted_By" type="String">
        /// Gets or sets the deleted_By for this sps_MCR_Detail.
        /// </field>
        /// <field name="Deleted_Date" type="Date">
        /// Gets or sets the deleted_Date for this sps_MCR_Detail.
        /// </field>
        /// <field name="Plate_No" type="String">
        /// Gets or sets the plate_No for this sps_MCR_Detail.
        /// </field>
        /// <field name="Old_ReportNo" type="String">
        /// Gets or sets the old_ReportNo for this sps_MCR_Detail.
        /// </field>
        /// <field name="sps_MCR" type="msls.application.sps_MCR">
        /// Gets or sets the sps_MCR for this sps_MCR_Detail.
        /// </field>
        /// <field name="details" type="msls.application.sps_MCR_Detail.Details">
        /// Gets the details for this sps_MCR_Detail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_MCR(entitySet) {
        /// <summary>
        /// Represents the sps_MCR entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_MCR.
        /// </param>
        /// <field name="MCR_No" type="String">
        /// Gets or sets the mCR_No for this sps_MCR.
        /// </field>
        /// <field name="Drg_ID_l2_Drg" type="String">
        /// Gets or sets the drg_ID_l2_Drg for this sps_MCR.
        /// </field>
        /// <field name="RevID" type="String">
        /// Gets or sets the revID for this sps_MCR.
        /// </field>
        /// <field name="Project_ID" type="String">
        /// Gets or sets the project_ID for this sps_MCR.
        /// </field>
        /// <field name="MCR_Date" type="Date">
        /// Gets or sets the mCR_Date for this sps_MCR.
        /// </field>
        /// <field name="MCR_By" type="String">
        /// Gets or sets the mCR_By for this sps_MCR.
        /// </field>
        /// <field name="Remark" type="String">
        /// Gets or sets the remark for this sps_MCR.
        /// </field>
        /// <field name="Insp_PlanDate" type="Date">
        /// Gets or sets the insp_PlanDate for this sps_MCR.
        /// </field>
        /// <field name="Old_ReportNo" type="String">
        /// Gets or sets the old_ReportNo for this sps_MCR.
        /// </field>
        /// <field name="sps_MCR_Details" type="msls.EntityCollection" elementType="msls.application.sps_MCR_Detail">
        /// Gets the sps_MCR_Details for this sps_MCR.
        /// </field>
        /// <field name="sps_Contractor_Module" type="msls.application.sps_Contractor_Module">
        /// Gets or sets the sps_Contractor_Module for this sps_MCR.
        /// </field>
        /// <field name="details" type="msls.application.sps_MCR.Details">
        /// Gets the details for this sps_MCR.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_Module(entitySet) {
        /// <summary>
        /// Represents the sps_Module entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_Module.
        /// </param>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this sps_Module.
        /// </field>
        /// <field name="Module_Name" type="String">
        /// Gets or sets the module_Name for this sps_Module.
        /// </field>
        /// <field name="Module_Desc" type="String">
        /// Gets or sets the module_Desc for this sps_Module.
        /// </field>
        /// <field name="XNO_Def" type="String">
        /// Gets or sets the xNO_Def for this sps_Module.
        /// </field>
        /// <field name="XNO_Seq" type="String">
        /// Gets or sets the xNO_Seq for this sps_Module.
        /// </field>
        /// <field name="Active" type="Boolean">
        /// Gets or sets the active for this sps_Module.
        /// </field>
        /// <field name="Insp_Agency" type="String">
        /// Gets or sets the insp_Agency for this sps_Module.
        /// </field>
        /// <field name="DrgIssueNo" type="Number">
        /// Gets or sets the drgIssueNo for this sps_Module.
        /// </field>
        /// <field name="Module_Yard_location" type="String">
        /// Gets or sets the module_Yard_location for this sps_Module.
        /// </field>
        /// <field name="flg_Part2_NonMandatory" type="Boolean">
        /// Gets or sets the flg_Part2_NonMandatory for this sps_Module.
        /// </field>
        /// <field name="sap_Module_ID" type="String">
        /// Gets or sets the sap_Module_ID for this sps_Module.
        /// </field>
        /// <field name="sps_Contractor_Modules" type="msls.EntityCollection" elementType="msls.application.sps_Contractor_Module">
        /// Gets the sps_Contractor_Modules for this sps_Module.
        /// </field>
        /// <field name="sps_DrgLists" type="msls.EntityCollection" elementType="msls.application.sps_DrgList">
        /// Gets the sps_DrgLists for this sps_Module.
        /// </field>
        /// <field name="sps_Project" type="msls.application.sps_Project">
        /// Gets or sets the sps_Project for this sps_Module.
        /// </field>
        /// <field name="sps_PWHTs" type="msls.EntityCollection" elementType="msls.application.sps_PWHT">
        /// Gets the sps_PWHTs for this sps_Module.
        /// </field>
        /// <field name="details" type="msls.application.sps_Module.Details">
        /// Gets the details for this sps_Module.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_MPI_Detail_Insp(entitySet) {
        /// <summary>
        /// Represents the sps_MPI_Detail_Insp entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_MPI_Detail_Insp.
        /// </param>
        /// <field name="MPI_No_l2_MPI" type="String">
        /// Gets or sets the mPI_No_l2_MPI for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="Sr_No" type="String">
        /// Gets or sets the sr_No for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="Drg_ID_l2_DrgList" type="String">
        /// Gets or sets the drg_ID_l2_DrgList for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="RevID" type="String">
        /// Gets or sets the revID for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="DCN_No" type="String">
        /// Gets or sets the dCN_No for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="Part_No_l2_Drg_BOQ" type="String">
        /// Gets or sets the part_No_l2_Drg_BOQ for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="Qty_Insp" type="String">
        /// Gets or sets the qty_Insp for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="Qty_Accepted" type="String">
        /// Gets or sets the qty_Accepted for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="Qty_Rejected" type="String">
        /// Gets or sets the qty_Rejected for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="IMIRNO" type="String">
        /// Gets or sets the iMIRNO for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="IDNO" type="String">
        /// Gets or sets the iDNO for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="HeatNo" type="String">
        /// Gets or sets the heatNo for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="Remark_InspDet" type="String">
        /// Gets or sets the remark_InspDet for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="MPI_Inspected_Date" type="Date">
        /// Gets or sets the mPI_Inspected_Date for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="MPI_Inspected_By" type="String">
        /// Gets or sets the mPI_Inspected_By for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="QC_Remark_Det" type="String">
        /// Gets or sets the qC_Remark_Det for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="status_MCR" type="Boolean">
        /// Gets or sets the status_MCR for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="sps_MPI" type="msls.application.sps_MPI">
        /// Gets or sets the sps_MPI for this sps_MPI_Detail_Insp.
        /// </field>
        /// <field name="details" type="msls.application.sps_MPI_Detail_Insp.Details">
        /// Gets the details for this sps_MPI_Detail_Insp.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_MPI_Detail_Off(entitySet) {
        /// <summary>
        /// Represents the sps_MPI_Detail_Off entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_MPI_Detail_Off.
        /// </param>
        /// <field name="MPI_No_l2_MPI" type="String">
        /// Gets or sets the mPI_No_l2_MPI for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="Sr_No" type="String">
        /// Gets or sets the sr_No for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="RevID" type="String">
        /// Gets or sets the revID for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="DCN_No" type="String">
        /// Gets or sets the dCN_No for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="Part_No_l2_Drg_BOQ" type="String">
        /// Gets or sets the part_No_l2_Drg_BOQ for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="SizeThk" type="String">
        /// Gets or sets the sizeThk for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="Mat_Desc" type="String">
        /// Gets or sets the mat_Desc for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="IMIRNO" type="String">
        /// Gets or sets the iMIRNO for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="IMIRSrNO" type="String">
        /// Gets or sets the iMIRSrNO for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="IDNOSAP" type="String">
        /// Gets or sets the iDNOSAP for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="IDNO" type="String">
        /// Gets or sets the iDNO for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="HeatNo" type="String">
        /// Gets or sets the heatNo for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="MPI_Det_Status" type="Number">
        /// Gets or sets the mPI_Det_Status for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="Qty_Offer" type="String">
        /// Gets or sets the qty_Offer for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="Qty_Insp_Pending" type="String">
        /// Gets or sets the qty_Insp_Pending for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="Qty_Insp" type="String">
        /// Gets or sets the qty_Insp for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="Qty_Accepted" type="String">
        /// Gets or sets the qty_Accepted for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="Qty_Rejected" type="String">
        /// Gets or sets the qty_Rejected for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="Remark_InspDet" type="String">
        /// Gets or sets the remark_InspDet for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="MPI_Inspected_Date" type="Date">
        /// Gets or sets the mPI_Inspected_Date for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="MPI_Inspected_By" type="String">
        /// Gets or sets the mPI_Inspected_By for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="QC_Remark_Det" type="String">
        /// Gets or sets the qC_Remark_Det for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="status_MCR" type="Boolean">
        /// Gets or sets the status_MCR for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="Remark_Off_Det" type="String">
        /// Gets or sets the remark_Off_Det for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="MPI_Edited_By" type="String">
        /// Gets or sets the mPI_Edited_By for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="MPI_Edited_Date" type="Date">
        /// Gets or sets the mPI_Edited_Date for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="Material" type="String">
        /// Gets or sets the material for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="IMIR_ID_HeatNo_Edited_By" type="String">
        /// Gets or sets the iMIR_ID_HeatNo_Edited_By for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="IMIR_ID_HeatNo_EditedDate" type="Date">
        /// Gets or sets the iMIR_ID_HeatNo_EditedDate for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="New_ReportNo" type="String">
        /// Gets or sets the new_ReportNo for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="Old_ReportNo" type="String">
        /// Gets or sets the old_ReportNo for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="sps_DrgList" type="msls.application.sps_DrgList">
        /// Gets or sets the sps_DrgList for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="sps_MPI" type="msls.application.sps_MPI">
        /// Gets or sets the sps_MPI for this sps_MPI_Detail_Off.
        /// </field>
        /// <field name="details" type="msls.application.sps_MPI_Detail_Off.Details">
        /// Gets the details for this sps_MPI_Detail_Off.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_MPI(entitySet) {
        /// <summary>
        /// Represents the sps_MPI entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_MPI.
        /// </param>
        /// <field name="MPI_No" type="String">
        /// Gets or sets the mPI_No for this sps_MPI.
        /// </field>
        /// <field name="MPI_Date" type="Date">
        /// Gets or sets the mPI_Date for this sps_MPI.
        /// </field>
        /// <field name="MPI_Status" type="Number">
        /// Gets or sets the mPI_Status for this sps_MPI.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this sps_MPI.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this sps_MPI.
        /// </field>
        /// <field name="Edited_By" type="String">
        /// Gets or sets the edited_By for this sps_MPI.
        /// </field>
        /// <field name="Edited_Date" type="Date">
        /// Gets or sets the edited_Date for this sps_MPI.
        /// </field>
        /// <field name="Insp_By" type="String">
        /// Gets or sets the insp_By for this sps_MPI.
        /// </field>
        /// <field name="Insp_Date" type="Date">
        /// Gets or sets the insp_Date for this sps_MPI.
        /// </field>
        /// <field name="QC_Remark" type="String">
        /// Gets or sets the qC_Remark for this sps_MPI.
        /// </field>
        /// <field name="EXEC_Remark" type="String">
        /// Gets or sets the eXEC_Remark for this sps_MPI.
        /// </field>
        /// <field name="Remark" type="String">
        /// Gets or sets the remark for this sps_MPI.
        /// </field>
        /// <field name="IDMark" type="String">
        /// Gets or sets the iDMark for this sps_MPI.
        /// </field>
        /// <field name="IDUsed" type="String">
        /// Gets or sets the iDUsed for this sps_MPI.
        /// </field>
        /// <field name="Insp_PlanDate" type="Date">
        /// Gets or sets the insp_PlanDate for this sps_MPI.
        /// </field>
        /// <field name="New_ReportNo" type="String">
        /// Gets or sets the new_ReportNo for this sps_MPI.
        /// </field>
        /// <field name="Old_ReportNo" type="String">
        /// Gets or sets the old_ReportNo for this sps_MPI.
        /// </field>
        /// <field name="sps_Contractor_Module" type="msls.application.sps_Contractor_Module">
        /// Gets or sets the sps_Contractor_Module for this sps_MPI.
        /// </field>
        /// <field name="sps_MPI_Detail_Insps" type="msls.EntityCollection" elementType="msls.application.sps_MPI_Detail_Insp">
        /// Gets the sps_MPI_Detail_Insps for this sps_MPI.
        /// </field>
        /// <field name="sps_MPI_Detail_Offs" type="msls.EntityCollection" elementType="msls.application.sps_MPI_Detail_Off">
        /// Gets the sps_MPI_Detail_Offs for this sps_MPI.
        /// </field>
        /// <field name="details" type="msls.application.sps_MPI.Details">
        /// Gets the details for this sps_MPI.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_NDEReqDet(entitySet) {
        /// <summary>
        /// Represents the sps_NDEReqDet entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_NDEReqDet.
        /// </param>
        /// <field name="NDE_Req_No_l2_NDEReq" type="String">
        /// Gets or sets the nDE_Req_No_l2_NDEReq for this sps_NDEReqDet.
        /// </field>
        /// <field name="Joint_ID_l2_Joints" type="String">
        /// Gets or sets the joint_ID_l2_Joints for this sps_NDEReqDet.
        /// </field>
        /// <field name="RR_WVF_No" type="String">
        /// Gets or sets the rR_WVF_No for this sps_NDEReqDet.
        /// </field>
        /// <field name="WVF_No_l2_WVF" type="String">
        /// Gets or sets the wVF_No_l2_WVF for this sps_NDEReqDet.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_NDEReqDet.
        /// </field>
        /// <field name="XNO" type="String">
        /// Gets or sets the xNO for this sps_NDEReqDet.
        /// </field>
        /// <field name="Seam_Size" type="String">
        /// Gets or sets the seam_Size for this sps_NDEReqDet.
        /// </field>
        /// <field name="Material" type="String">
        /// Gets or sets the material for this sps_NDEReqDet.
        /// </field>
        /// <field name="Material1" type="String">
        /// Gets or sets the material1 for this sps_NDEReqDet.
        /// </field>
        /// <field name="Material2" type="String">
        /// Gets or sets the material2 for this sps_NDEReqDet.
        /// </field>
        /// <field name="Material3" type="String">
        /// Gets or sets the material3 for this sps_NDEReqDet.
        /// </field>
        /// <field name="Acc_Std" type="String">
        /// Gets or sets the acc_Std for this sps_NDEReqDet.
        /// </field>
        /// <field name="WPS_l2_WPS" type="String">
        /// Gets or sets the wPS_l2_WPS for this sps_NDEReqDet.
        /// </field>
        /// <field name="Weld_Process" type="String">
        /// Gets or sets the weld_Process for this sps_NDEReqDet.
        /// </field>
        /// <field name="Welder" type="String">
        /// Gets or sets the welder for this sps_NDEReqDet.
        /// </field>
        /// <field name="LengthRTPer" type="String">
        /// Gets or sets the lengthRTPer for this sps_NDEReqDet.
        /// </field>
        /// <field name="LengthUTPer" type="String">
        /// Gets or sets the lengthUTPer for this sps_NDEReqDet.
        /// </field>
        /// <field name="LengthPTPer" type="String">
        /// Gets or sets the lengthPTPer for this sps_NDEReqDet.
        /// </field>
        /// <field name="LengthMTPer" type="String">
        /// Gets or sets the lengthMTPer for this sps_NDEReqDet.
        /// </field>
        /// <field name="Remark_Det" type="String">
        /// Gets or sets the remark_Det for this sps_NDEReqDet.
        /// </field>
        /// <field name="LTRemark" type="String">
        /// Gets or sets the lTRemark for this sps_NDEReqDet.
        /// </field>
        /// <field name="TPIRemark" type="String">
        /// Gets or sets the tPIRemark for this sps_NDEReqDet.
        /// </field>
        /// <field name="Edited_By" type="String">
        /// Gets or sets the edited_By for this sps_NDEReqDet.
        /// </field>
        /// <field name="Edited_Date" type="Date">
        /// Gets or sets the edited_Date for this sps_NDEReqDet.
        /// </field>
        /// <field name="Deleted_By" type="String">
        /// Gets or sets the deleted_By for this sps_NDEReqDet.
        /// </field>
        /// <field name="Deleted_Date" type="Date">
        /// Gets or sets the deleted_Date for this sps_NDEReqDet.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this sps_NDEReqDet.
        /// </field>
        /// <field name="ReportNo" type="String">
        /// Gets or sets the reportNo for this sps_NDEReqDet.
        /// </field>
        /// <field name="Result" type="String">
        /// Gets or sets the result for this sps_NDEReqDet.
        /// </field>
        /// <field name="ReasonForDelete" type="String">
        /// Gets or sets the reasonForDelete for this sps_NDEReqDet.
        /// </field>
        /// <field name="Status_WVF_Allow_After_Rep" type="Number">
        /// Gets or sets the status_WVF_Allow_After_Rep for this sps_NDEReqDet.
        /// </field>
        /// <field name="Status_RR_WVF_Allow_After_Rep" type="Number">
        /// Gets or sets the status_RR_WVF_Allow_After_Rep for this sps_NDEReqDet.
        /// </field>
        /// <field name="WPS_WeldProc_Edited_by" type="String">
        /// Gets or sets the wPS_WeldProc_Edited_by for this sps_NDEReqDet.
        /// </field>
        /// <field name="WPS_WeldProc_Edited_Date" type="Date">
        /// Gets or sets the wPS_WeldProc_Edited_Date for this sps_NDEReqDet.
        /// </field>
        /// <field name="Witness_Status" type="String">
        /// Gets or sets the witness_Status for this sps_NDEReqDet.
        /// </field>
        /// <field name="Joint_Category" type="String">
        /// Gets or sets the joint_Category for this sps_NDEReqDet.
        /// </field>
        /// <field name="NOT_Ready_By" type="String">
        /// Gets or sets the nOT_Ready_By for this sps_NDEReqDet.
        /// </field>
        /// <field name="NOT_Ready_Dt" type="Date">
        /// Gets or sets the nOT_Ready_Dt for this sps_NDEReqDet.
        /// </field>
        /// <field name="NOT_Ready_Rem" type="String">
        /// Gets or sets the nOT_Ready_Rem for this sps_NDEReqDet.
        /// </field>
        /// <field name="Joint_Config" type="String">
        /// Gets or sets the joint_Config for this sps_NDEReqDet.
        /// </field>
        /// <field name="Buffer_Created_By" type="String">
        /// Gets or sets the buffer_Created_By for this sps_NDEReqDet.
        /// </field>
        /// <field name="Buffer_Created_Date" type="Date">
        /// Gets or sets the buffer_Created_Date for this sps_NDEReqDet.
        /// </field>
        /// <field name="New_ReportNo" type="String">
        /// Gets or sets the new_ReportNo for this sps_NDEReqDet.
        /// </field>
        /// <field name="Old_ReportNo" type="String">
        /// Gets or sets the old_ReportNo for this sps_NDEReqDet.
        /// </field>
        /// <field name="sps_NDEReq" type="msls.application.sps_NDEReq">
        /// Gets or sets the sps_NDEReq for this sps_NDEReqDet.
        /// </field>
        /// <field name="details" type="msls.application.sps_NDEReqDet.Details">
        /// Gets the details for this sps_NDEReqDet.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_NDEReq(entitySet) {
        /// <summary>
        /// Represents the sps_NDEReq entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_NDEReq.
        /// </param>
        /// <field name="NDE_Req_No" type="String">
        /// Gets or sets the nDE_Req_No for this sps_NDEReq.
        /// </field>
        /// <field name="NDE_Req_Date" type="Date">
        /// Gets or sets the nDE_Req_Date for this sps_NDEReq.
        /// </field>
        /// <field name="Req_To" type="String">
        /// Gets or sets the req_To for this sps_NDEReq.
        /// </field>
        /// <field name="Req_For" type="String">
        /// Gets or sets the req_For for this sps_NDEReq.
        /// </field>
        /// <field name="Insp_Agency" type="String">
        /// Gets or sets the insp_Agency for this sps_NDEReq.
        /// </field>
        /// <field name="Drg_ID_l2_DrgList" type="String">
        /// Gets or sets the drg_ID_l2_DrgList for this sps_NDEReq.
        /// </field>
        /// <field name="Rev_l2_DrgList" type="String">
        /// Gets or sets the rev_l2_DrgList for this sps_NDEReq.
        /// </field>
        /// <field name="Stage" type="String">
        /// Gets or sets the stage for this sps_NDEReq.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this sps_NDEReq.
        /// </field>
        /// <field name="Checked_By" type="String">
        /// Gets or sets the checked_By for this sps_NDEReq.
        /// </field>
        /// <field name="Offered_By" type="String">
        /// Gets or sets the offered_By for this sps_NDEReq.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this sps_NDEReq.
        /// </field>
        /// <field name="Remark" type="String">
        /// Gets or sets the remark for this sps_NDEReq.
        /// </field>
        /// <field name="New_ReportNo" type="String">
        /// Gets or sets the new_ReportNo for this sps_NDEReq.
        /// </field>
        /// <field name="Old_ReportNo" type="String">
        /// Gets or sets the old_ReportNo for this sps_NDEReq.
        /// </field>
        /// <field name="sps_Contractor_Module" type="msls.application.sps_Contractor_Module">
        /// Gets or sets the sps_Contractor_Module for this sps_NDEReq.
        /// </field>
        /// <field name="sps_NDEReqDets" type="msls.EntityCollection" elementType="msls.application.sps_NDEReqDet">
        /// Gets the sps_NDEReqDets for this sps_NDEReq.
        /// </field>
        /// <field name="details" type="msls.application.sps_NDEReq.Details">
        /// Gets the details for this sps_NDEReq.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_Project_Drg(entitySet) {
        /// <summary>
        /// Represents the sps_Project_Drg entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_Project_Drg.
        /// </param>
        /// <field name="Project_ID" type="String">
        /// Gets or sets the project_ID for this sps_Project_Drg.
        /// </field>
        /// <field name="Project_Name" type="String">
        /// Gets or sets the project_Name for this sps_Project_Drg.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this sps_Project_Drg.
        /// </field>
        /// <field name="Module_Name" type="String">
        /// Gets or sets the module_Name for this sps_Project_Drg.
        /// </field>
        /// <field name="Contractor_Name" type="String">
        /// Gets or sets the contractor_Name for this sps_Project_Drg.
        /// </field>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this sps_Project_Drg.
        /// </field>
        /// <field name="Drg_No_MFF" type="String">
        /// Gets or sets the drg_No_MFF for this sps_Project_Drg.
        /// </field>
        /// <field name="Drg_No_Client" type="String">
        /// Gets or sets the drg_No_Client for this sps_Project_Drg.
        /// </field>
        /// <field name="Rev" type="String">
        /// Gets or sets the rev for this sps_Project_Drg.
        /// </field>
        /// <field name="Sheet_No" type="String">
        /// Gets or sets the sheet_No for this sps_Project_Drg.
        /// </field>
        /// <field name="Total_Sheets" type="String">
        /// Gets or sets the total_Sheets for this sps_Project_Drg.
        /// </field>
        /// <field name="SheetID" type="String">
        /// Gets or sets the sheetID for this sps_Project_Drg.
        /// </field>
        /// <field name="Print_Drawing" type="String">
        /// Gets or sets the print_Drawing for this sps_Project_Drg.
        /// </field>
        /// <field name="flg_Rep_No_With_Module" type="Boolean">
        /// Gets or sets the flg_Rep_No_With_Module for this sps_Project_Drg.
        /// </field>
        /// <field name="flg_Parent_WONo" type="Boolean">
        /// Gets or sets the flg_Parent_WONo for this sps_Project_Drg.
        /// </field>
        /// <field name="Agency_Type1" type="String">
        /// Gets or sets the agency_Type1 for this sps_Project_Drg.
        /// </field>
        /// <field name="Agency_Type2" type="String">
        /// Gets or sets the agency_Type2 for this sps_Project_Drg.
        /// </field>
        /// <field name="Agency_Type3" type="String">
        /// Gets or sets the agency_Type3 for this sps_Project_Drg.
        /// </field>
        /// <field name="flg_IMIRIDNO_With_Qty_Split" type="Boolean">
        /// Gets or sets the flg_IMIRIDNO_With_Qty_Split for this sps_Project_Drg.
        /// </field>
        /// <field name="Contractor_ID" type="String">
        /// Gets or sets the contractor_ID for this sps_Project_Drg.
        /// </field>
        /// <field name="details" type="msls.application.sps_Project_Drg.Details">
        /// Gets the details for this sps_Project_Drg.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_Project(entitySet) {
        /// <summary>
        /// Represents the sps_Project entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_Project.
        /// </param>
        /// <field name="Plant" type="String">
        /// Gets or sets the plant for this sps_Project.
        /// </field>
        /// <field name="Project_ID" type="String">
        /// Gets or sets the project_ID for this sps_Project.
        /// </field>
        /// <field name="Project_Name" type="String">
        /// Gets or sets the project_Name for this sps_Project.
        /// </field>
        /// <field name="Project_Desc" type="String">
        /// Gets or sets the project_Desc for this sps_Project.
        /// </field>
        /// <field name="Client" type="String">
        /// Gets or sets the client for this sps_Project.
        /// </field>
        /// <field name="Start_Date" type="Date">
        /// Gets or sets the start_Date for this sps_Project.
        /// </field>
        /// <field name="End_Date" type="Date">
        /// Gets or sets the end_Date for this sps_Project.
        /// </field>
        /// <field name="Insp_Agency" type="String">
        /// Gets or sets the insp_Agency for this sps_Project.
        /// </field>
        /// <field name="Print_Drawing" type="String">
        /// Gets or sets the print_Drawing for this sps_Project.
        /// </field>
        /// <field name="Active" type="Boolean">
        /// Gets or sets the active for this sps_Project.
        /// </field>
        /// <field name="QCP_No" type="String">
        /// Gets or sets the qCP_No for this sps_Project.
        /// </field>
        /// <field name="QCP_Stage_No" type="String">
        /// Gets or sets the qCP_Stage_No for this sps_Project.
        /// </field>
        /// <field name="RMI_Seq" type="String">
        /// Gets or sets the rMI_Seq for this sps_Project.
        /// </field>
        /// <field name="TPI" type="String">
        /// Gets or sets the tPI for this sps_Project.
        /// </field>
        /// <field name="CA" type="String">
        /// Gets or sets the cA for this sps_Project.
        /// </field>
        /// <field name="AI" type="String">
        /// Gets or sets the aI for this sps_Project.
        /// </field>
        /// <field name="PMC_CLIENT" type="String">
        /// Gets or sets the pMC_CLIENT for this sps_Project.
        /// </field>
        /// <field name="Agency_Type1" type="String">
        /// Gets or sets the agency_Type1 for this sps_Project.
        /// </field>
        /// <field name="Agency_Type2" type="String">
        /// Gets or sets the agency_Type2 for this sps_Project.
        /// </field>
        /// <field name="Agency_Type3" type="String">
        /// Gets or sets the agency_Type3 for this sps_Project.
        /// </field>
        /// <field name="flg_Rep_No_With_Module" type="Boolean">
        /// Gets or sets the flg_Rep_No_With_Module for this sps_Project.
        /// </field>
        /// <field name="flg_Parent_WONo" type="Boolean">
        /// Gets or sets the flg_Parent_WONo for this sps_Project.
        /// </field>
        /// <field name="flg_Drg_Prn_DrgNo" type="Boolean">
        /// Gets or sets the flg_Drg_Prn_DrgNo for this sps_Project.
        /// </field>
        /// <field name="flg_Drg_Prn_SheetNo" type="Boolean">
        /// Gets or sets the flg_Drg_Prn_SheetNo for this sps_Project.
        /// </field>
        /// <field name="flg_Drg_Prn_RevNo" type="Boolean">
        /// Gets or sets the flg_Drg_Prn_RevNo for this sps_Project.
        /// </field>
        /// <field name="flg_AutoBuffer_for_WEL_Dissable" type="Boolean">
        /// Gets or sets the flg_AutoBuffer_for_WEL_Dissable for this sps_Project.
        /// </field>
        /// <field name="flg_IMIRIDNO_With_Qty_Split" type="Boolean">
        /// Gets or sets the flg_IMIRIDNO_With_Qty_Split for this sps_Project.
        /// </field>
        /// <field name="flg_Ignore_Welder_In_Cover" type="Boolean">
        /// Gets or sets the flg_Ignore_Welder_In_Cover for this sps_Project.
        /// </field>
        /// <field name="flg_Tubular_Mandatory" type="Boolean">
        /// Gets or sets the flg_Tubular_Mandatory for this sps_Project.
        /// </field>
        /// <field name="flg_PlateNo_In_MCR" type="Boolean">
        /// Gets or sets the flg_PlateNo_In_MCR for this sps_Project.
        /// </field>
        /// <field name="flg_Hardness_Required_After_Repair" type="Boolean">
        /// Gets or sets the flg_Hardness_Required_After_Repair for this sps_Project.
        /// </field>
        /// <field name="flg_Drg_Prn_DrgNo_Client" type="Boolean">
        /// Gets or sets the flg_Drg_Prn_DrgNo_Client for this sps_Project.
        /// </field>
        /// <field name="flg_Drg_Prn_DrgNo_PMT" type="Boolean">
        /// Gets or sets the flg_Drg_Prn_DrgNo_PMT for this sps_Project.
        /// </field>
        /// <field name="flg_Automatic_NDE_Req_Offer" type="Boolean">
        /// Gets or sets the flg_Automatic_NDE_Req_Offer for this sps_Project.
        /// </field>
        /// <field name="flg_Rep_No_With_Module_In_Det_col" type="Boolean">
        /// Gets or sets the flg_Rep_No_With_Module_In_Det_col for this sps_Project.
        /// </field>
        /// <field name="sps_Modules" type="msls.EntityCollection" elementType="msls.application.sps_Module">
        /// Gets the sps_Modules for this sps_Project.
        /// </field>
        /// <field name="sps_User_Projects" type="msls.EntityCollection" elementType="msls.application.sps_User_Project">
        /// Gets the sps_User_Projects for this sps_Project.
        /// </field>
        /// <field name="details" type="msls.application.sps_Project.Details">
        /// Gets the details for this sps_Project.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_PWHTDetail(entitySet) {
        /// <summary>
        /// Represents the sps_PWHTDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_PWHTDetail.
        /// </param>
        /// <field name="PWHT_No_l2_PWHT" type="String">
        /// Gets or sets the pWHT_No_l2_PWHT for this sps_PWHTDetail.
        /// </field>
        /// <field name="Joint_ID_l2_Joints" type="String">
        /// Gets or sets the joint_ID_l2_Joints for this sps_PWHTDetail.
        /// </field>
        /// <field name="Drg_ID_l2_DrgList" type="String">
        /// Gets or sets the drg_ID_l2_DrgList for this sps_PWHTDetail.
        /// </field>
        /// <field name="RevID" type="String">
        /// Gets or sets the revID for this sps_PWHTDetail.
        /// </field>
        /// <field name="Insp_Agency" type="String">
        /// Gets or sets the insp_Agency for this sps_PWHTDetail.
        /// </field>
        /// <field name="Heat_Treatment" type="String">
        /// Gets or sets the heat_Treatment for this sps_PWHTDetail.
        /// </field>
        /// <field name="HT_Processes" type="String">
        /// Gets or sets the hT_Processes for this sps_PWHTDetail.
        /// </field>
        /// <field name="Furnance_Loaded" type="String">
        /// Gets or sets the furnance_Loaded for this sps_PWHTDetail.
        /// </field>
        /// <field name="Loading_Temp" type="String">
        /// Gets or sets the loading_Temp for this sps_PWHTDetail.
        /// </field>
        /// <field name="Soaking_Temp" type="String">
        /// Gets or sets the soaking_Temp for this sps_PWHTDetail.
        /// </field>
        /// <field name="Soaking_Peroid" type="String">
        /// Gets or sets the soaking_Peroid for this sps_PWHTDetail.
        /// </field>
        /// <field name="Rate_Of_Heating" type="String">
        /// Gets or sets the rate_Of_Heating for this sps_PWHTDetail.
        /// </field>
        /// <field name="Soaking_Temp_From" type="String">
        /// Gets or sets the soaking_Temp_From for this sps_PWHTDetail.
        /// </field>
        /// <field name="Soaking_Temp_To" type="String">
        /// Gets or sets the soaking_Temp_To for this sps_PWHTDetail.
        /// </field>
        /// <field name="Soaking_Time_Hr" type="String">
        /// Gets or sets the soaking_Time_Hr for this sps_PWHTDetail.
        /// </field>
        /// <field name="Soaking_Time_Min" type="String">
        /// Gets or sets the soaking_Time_Min for this sps_PWHTDetail.
        /// </field>
        /// <field name="Rate_Of_Cooling" type="String">
        /// Gets or sets the rate_Of_Cooling for this sps_PWHTDetail.
        /// </field>
        /// <field name="Unloading_Temp" type="String">
        /// Gets or sets the unloading_Temp for this sps_PWHTDetail.
        /// </field>
        /// <field name="Deleted_By" type="String">
        /// Gets or sets the deleted_By for this sps_PWHTDetail.
        /// </field>
        /// <field name="Deleted_Date" type="Date">
        /// Gets or sets the deleted_Date for this sps_PWHTDetail.
        /// </field>
        /// <field name="ReasonForDelete" type="String">
        /// Gets or sets the reasonForDelete for this sps_PWHTDetail.
        /// </field>
        /// <field name="Remark_Off_Det" type="String">
        /// Gets or sets the remark_Off_Det for this sps_PWHTDetail.
        /// </field>
        /// <field name="Remark_QA_Det" type="String">
        /// Gets or sets the remark_QA_Det for this sps_PWHTDetail.
        /// </field>
        /// <field name="Status" type="Number">
        /// Gets or sets the status for this sps_PWHTDetail.
        /// </field>
        /// <field name="New_ReportNo" type="String">
        /// Gets or sets the new_ReportNo for this sps_PWHTDetail.
        /// </field>
        /// <field name="Old_ReportNo" type="String">
        /// Gets or sets the old_ReportNo for this sps_PWHTDetail.
        /// </field>
        /// <field name="sps_PWHT" type="msls.application.sps_PWHT">
        /// Gets or sets the sps_PWHT for this sps_PWHTDetail.
        /// </field>
        /// <field name="details" type="msls.application.sps_PWHTDetail.Details">
        /// Gets the details for this sps_PWHTDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_PWHT(entitySet) {
        /// <summary>
        /// Represents the sps_PWHT entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_PWHT.
        /// </param>
        /// <field name="PWHT_No" type="String">
        /// Gets or sets the pWHT_No for this sps_PWHT.
        /// </field>
        /// <field name="PWHT_Date" type="Date">
        /// Gets or sets the pWHT_Date for this sps_PWHT.
        /// </field>
        /// <field name="Instruction1" type="String">
        /// Gets or sets the instruction1 for this sps_PWHT.
        /// </field>
        /// <field name="Instruction2" type="String">
        /// Gets or sets the instruction2 for this sps_PWHT.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this sps_PWHT.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this sps_PWHT.
        /// </field>
        /// <field name="Authorize_By" type="String">
        /// Gets or sets the authorize_By for this sps_PWHT.
        /// </field>
        /// <field name="Authorize_date" type="Date">
        /// Gets or sets the authorize_date for this sps_PWHT.
        /// </field>
        /// <field name="Insp_By" type="String">
        /// Gets or sets the insp_By for this sps_PWHT.
        /// </field>
        /// <field name="Insp_Date" type="Date">
        /// Gets or sets the insp_Date for this sps_PWHT.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this sps_PWHT.
        /// </field>
        /// <field name="Remark" type="String">
        /// Gets or sets the remark for this sps_PWHT.
        /// </field>
        /// <field name="QA_Remark" type="String">
        /// Gets or sets the qA_Remark for this sps_PWHT.
        /// </field>
        /// <field name="Remark1" type="String">
        /// Gets or sets the remark1 for this sps_PWHT.
        /// </field>
        /// <field name="Remark2" type="String">
        /// Gets or sets the remark2 for this sps_PWHT.
        /// </field>
        /// <field name="Remark3" type="String">
        /// Gets or sets the remark3 for this sps_PWHT.
        /// </field>
        /// <field name="Remark4" type="String">
        /// Gets or sets the remark4 for this sps_PWHT.
        /// </field>
        /// <field name="New_ReportNo" type="String">
        /// Gets or sets the new_ReportNo for this sps_PWHT.
        /// </field>
        /// <field name="Old_ReportNo" type="String">
        /// Gets or sets the old_ReportNo for this sps_PWHT.
        /// </field>
        /// <field name="sps_Module" type="msls.application.sps_Module">
        /// Gets or sets the sps_Module for this sps_PWHT.
        /// </field>
        /// <field name="sps_PWHTDetails" type="msls.EntityCollection" elementType="msls.application.sps_PWHTDetail">
        /// Gets the sps_PWHTDetails for this sps_PWHT.
        /// </field>
        /// <field name="details" type="msls.application.sps_PWHT.Details">
        /// Gets the details for this sps_PWHT.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_RR_WVFDetail(entitySet) {
        /// <summary>
        /// Represents the sps_RR_WVFDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_RR_WVFDetail.
        /// </param>
        /// <field name="RR_WVF_No" type="String">
        /// Gets or sets the rR_WVF_No for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="FTU_No_l2_FTU" type="String">
        /// Gets or sets the fTU_No_l2_FTU for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Joint_ID_l2_Joints" type="String">
        /// Gets or sets the joint_ID_l2_Joints for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Drg_ID_l2_DrgList" type="String">
        /// Gets or sets the drg_ID_l2_DrgList for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="RevID" type="String">
        /// Gets or sets the revID for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="DCN_No" type="String">
        /// Gets or sets the dCN_No for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="WPS_l2_WPS" type="String">
        /// Gets or sets the wPS_l2_WPS for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Weld_Process" type="String">
        /// Gets or sets the weld_Process for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Welder1" type="String">
        /// Gets or sets the welder1 for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Welder2" type="String">
        /// Gets or sets the welder2 for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Welder3" type="String">
        /// Gets or sets the welder3 for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Welder4" type="String">
        /// Gets or sets the welder4 for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Welder5" type="String">
        /// Gets or sets the welder5 for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Desg" type="String">
        /// Gets or sets the desg for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Deleted_By" type="String">
        /// Gets or sets the deleted_By for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Deleted_Date" type="Date">
        /// Gets or sets the deleted_Date for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Remark_Det" type="String">
        /// Gets or sets the remark_Det for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="Status" type="Number">
        /// Gets or sets the status for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="QC_Remark_Det" type="String">
        /// Gets or sets the qC_Remark_Det for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="ReasonForDelete" type="String">
        /// Gets or sets the reasonForDelete for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="WPS_WeldProc_Edited_by" type="String">
        /// Gets or sets the wPS_WeldProc_Edited_by for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="WPS_WeldProc_Edited_Date" type="Date">
        /// Gets or sets the wPS_WeldProc_Edited_Date for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="New_ReportNo" type="String">
        /// Gets or sets the new_ReportNo for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="sps_RR_WVF" type="msls.application.sps_RR_WVF">
        /// Gets or sets the sps_RR_WVF for this sps_RR_WVFDetail.
        /// </field>
        /// <field name="details" type="msls.application.sps_RR_WVFDetail.Details">
        /// Gets the details for this sps_RR_WVFDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_RR_WVF(entitySet) {
        /// <summary>
        /// Represents the sps_RR_WVF entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_RR_WVF.
        /// </param>
        /// <field name="RR_WVF_No" type="String">
        /// Gets or sets the rR_WVF_No for this sps_RR_WVF.
        /// </field>
        /// <field name="RR_WVF_Date" type="Date">
        /// Gets or sets the rR_WVF_Date for this sps_RR_WVF.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this sps_RR_WVF.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this sps_RR_WVF.
        /// </field>
        /// <field name="Insp_By" type="String">
        /// Gets or sets the insp_By for this sps_RR_WVF.
        /// </field>
        /// <field name="Insp_Date" type="Date">
        /// Gets or sets the insp_Date for this sps_RR_WVF.
        /// </field>
        /// <field name="Status" type="Number">
        /// Gets or sets the status for this sps_RR_WVF.
        /// </field>
        /// <field name="Edited_By" type="String">
        /// Gets or sets the edited_By for this sps_RR_WVF.
        /// </field>
        /// <field name="Edited_Date" type="Date">
        /// Gets or sets the edited_Date for this sps_RR_WVF.
        /// </field>
        /// <field name="EXEC_Remark" type="String">
        /// Gets or sets the eXEC_Remark for this sps_RR_WVF.
        /// </field>
        /// <field name="QC_Remark" type="String">
        /// Gets or sets the qC_Remark for this sps_RR_WVF.
        /// </field>
        /// <field name="Insp_PlanDate" type="Date">
        /// Gets or sets the insp_PlanDate for this sps_RR_WVF.
        /// </field>
        /// <field name="sps_Contractor_Module" type="msls.application.sps_Contractor_Module">
        /// Gets or sets the sps_Contractor_Module for this sps_RR_WVF.
        /// </field>
        /// <field name="sps_RR_WVFDetails" type="msls.EntityCollection" elementType="msls.application.sps_RR_WVFDetail">
        /// Gets the sps_RR_WVFDetails for this sps_RR_WVF.
        /// </field>
        /// <field name="details" type="msls.application.sps_RR_WVF.Details">
        /// Gets the details for this sps_RR_WVF.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_User_Project(entitySet) {
        /// <summary>
        /// Represents the sps_User_Project entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_User_Project.
        /// </param>
        /// <field name="UserID_l2_User" type="String">
        /// Gets or sets the userID_l2_User for this sps_User_Project.
        /// </field>
        /// <field name="Project_ID_Project" type="String">
        /// Gets or sets the project_ID_Project for this sps_User_Project.
        /// </field>
        /// <field name="Active" type="Boolean">
        /// Gets or sets the active for this sps_User_Project.
        /// </field>
        /// <field name="sps_Project" type="msls.application.sps_Project">
        /// Gets or sets the sps_Project for this sps_User_Project.
        /// </field>
        /// <field name="details" type="msls.application.sps_User_Project.Details">
        /// Gets the details for this sps_User_Project.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_Drg_No_For_NDE(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_Drg_No_For_NDE entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_Drg_No_For_NDE.
        /// </param>
        /// <field name="DrgNo" type="String">
        /// Gets or sets the drgNo for this sps_View_Get_Drg_No_For_NDE.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this sps_View_Get_Drg_No_For_NDE.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_Drg_No_For_NDE.Details">
        /// Gets the details for this sps_View_Get_Drg_No_For_NDE.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_Drg_No_For_PWHT(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_Drg_No_For_PWHT entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_Drg_No_For_PWHT.
        /// </param>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="Material1" type="String">
        /// Gets or sets the material1 for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="Project_ID" type="String">
        /// Gets or sets the project_ID for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="Project_Name" type="String">
        /// Gets or sets the project_Name for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="Module_Name" type="String">
        /// Gets or sets the module_Name for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="Drg_ID_l2_DrgList" type="String">
        /// Gets or sets the drg_ID_l2_DrgList for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="drg_no" type="String">
        /// Gets or sets the drg_no for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="flg_PWHT" type="Boolean">
        /// Gets or sets the flg_PWHT for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="Insp_Agency" type="String">
        /// Gets or sets the insp_Agency for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="DSC" type="String">
        /// Gets or sets the dSC for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_Drg_No_For_PWHT.Details">
        /// Gets the details for this sps_View_Get_Drg_No_For_PWHT.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_Drg_No_For_WVF(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_Drg_No_For_WVF entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_Drg_No_For_WVF.
        /// </param>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="Project_ID" type="String">
        /// Gets or sets the project_ID for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="Joint_Category" type="String">
        /// Gets or sets the joint_Category for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="Desg" type="String">
        /// Gets or sets the desg for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="FTUStatus" type="String">
        /// Gets or sets the fTUStatus for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="WVFStatus" type="String">
        /// Gets or sets the wVFStatus for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="Status_WVF" type="Number">
        /// Gets or sets the status_WVF for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="Status_RT" type="String">
        /// Gets or sets the status_RT for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="Status_UT" type="String">
        /// Gets or sets the status_UT for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="Status_MT" type="String">
        /// Gets or sets the status_MT for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="Status_PT" type="String">
        /// Gets or sets the status_PT for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="Status_PA_UT" type="String">
        /// Gets or sets the status_PA_UT for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="Status_TOFD_UT" type="String">
        /// Gets or sets the status_TOFD_UT for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="Rev" type="String">
        /// Gets or sets the rev for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_Drg_No_For_WVF.Details">
        /// Gets the details for this sps_View_Get_Drg_No_For_WVF.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_DrgNo_For_FitUpOffer(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_DrgNo_For_FitUpOffer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_DrgNo_For_FitUpOffer.
        /// </param>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this sps_View_Get_DrgNo_For_FitUpOffer.
        /// </field>
        /// <field name="Rev" type="String">
        /// Gets or sets the rev for this sps_View_Get_DrgNo_For_FitUpOffer.
        /// </field>
        /// <field name="Sheet_No" type="String">
        /// Gets or sets the sheet_No for this sps_View_Get_DrgNo_For_FitUpOffer.
        /// </field>
        /// <field name="Total_Sheets" type="String">
        /// Gets or sets the total_Sheets for this sps_View_Get_DrgNo_For_FitUpOffer.
        /// </field>
        /// <field name="Module_ID_l2_Module" type="String">
        /// Gets or sets the module_ID_l2_Module for this sps_View_Get_DrgNo_For_FitUpOffer.
        /// </field>
        /// <field name="Drg_No_MFF" type="String">
        /// Gets or sets the drg_No_MFF for this sps_View_Get_DrgNo_For_FitUpOffer.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_DrgNo_For_FitUpOffer.Details">
        /// Gets the details for this sps_View_Get_DrgNo_For_FitUpOffer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_get_DrgNOMFF_For_FitupOffer(entitySet) {
        /// <summary>
        /// Represents the sps_View_get_DrgNOMFF_For_FitupOffer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_get_DrgNOMFF_For_FitupOffer.
        /// </param>
        /// <field name="Drg_No_MFF" type="String">
        /// Gets or sets the drg_No_MFF for this sps_View_get_DrgNOMFF_For_FitupOffer.
        /// </field>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this sps_View_get_DrgNOMFF_For_FitupOffer.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_get_DrgNOMFF_For_FitupOffer.Details">
        /// Gets the details for this sps_View_get_DrgNOMFF_For_FitupOffer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_FTUDetail_For_Offer(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_FTUDetail_For_Offer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_FTUDetail_For_Offer.
        /// </param>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this sps_View_Get_FTUDetail_For_Offer.
        /// </field>
        /// <field name="c_Module" type="String">
        /// Gets or sets the c_Module for this sps_View_Get_FTUDetail_For_Offer.
        /// </field>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this sps_View_Get_FTUDetail_For_Offer.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this sps_View_Get_FTUDetail_For_Offer.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_FTUDetail_For_Offer.
        /// </field>
        /// <field name="Status_FTU" type="Number">
        /// Gets or sets the status_FTU for this sps_View_Get_FTUDetail_For_Offer.
        /// </field>
        /// <field name="FTUStatus" type="String">
        /// Gets or sets the fTUStatus for this sps_View_Get_FTUDetail_For_Offer.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_FTUDetail_For_Offer.Details">
        /// Gets the details for this sps_View_Get_FTUDetail_For_Offer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_HeatNo_From_IMIRID(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_HeatNo_From_IMIRID entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_HeatNo_From_IMIRID.
        /// </param>
        /// <field name="HeatNo" type="String">
        /// Gets or sets the heatNo for this sps_View_Get_HeatNo_From_IMIRID.
        /// </field>
        /// <field name="IDCode" type="String">
        /// Gets or sets the iDCode for this sps_View_Get_HeatNo_From_IMIRID.
        /// </field>
        /// <field name="IMIRID" type="String">
        /// Gets or sets the iMIRID for this sps_View_Get_HeatNo_From_IMIRID.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_HeatNo_From_IMIRID.Details">
        /// Gets the details for this sps_View_Get_HeatNo_From_IMIRID.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_IDNO_From_IMIRID(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_IDNO_From_IMIRID entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_IDNO_From_IMIRID.
        /// </param>
        /// <field name="IDNo" type="String">
        /// Gets or sets the iDNo for this sps_View_Get_IDNO_From_IMIRID.
        /// </field>
        /// <field name="IMIRID" type="String">
        /// Gets or sets the iMIRID for this sps_View_Get_IDNO_From_IMIRID.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_IDNO_From_IMIRID.Details">
        /// Gets the details for this sps_View_Get_IDNO_From_IMIRID.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item.
        /// </param>
        /// <field name="Drg_id_l2_drglist" type="String">
        /// Gets or sets the drg_id_l2_drglist for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item.
        /// </field>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item.
        /// </field>
        /// <field name="IMIRNO" type="String">
        /// Gets or sets the iMIRNO for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item.
        /// </field>
        /// <field name="IDNO" type="String">
        /// Gets or sets the iDNO for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item.
        /// </field>
        /// <field name="HeatNo" type="String">
        /// Gets or sets the heatNo for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item.
        /// </field>
        /// <field name="Part_No_l2_Drg_BOQ" type="String">
        /// Gets or sets the part_No_l2_Drg_BOQ for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item.
        /// </field>
        /// <field name="Module_ID_l2_Module" type="String">
        /// Gets or sets the module_ID_l2_Module for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item.Details">
        /// Gets the details for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item.
        /// </param>
        /// <field name="Drg_id_l2_drglist" type="String">
        /// Gets or sets the drg_id_l2_drglist for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item.
        /// </field>
        /// <field name="Drg_ID_2" type="String">
        /// Gets or sets the drg_ID_2 for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item.
        /// </field>
        /// <field name="IMIRNO" type="String">
        /// Gets or sets the iMIRNO for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item.
        /// </field>
        /// <field name="IDNO" type="String">
        /// Gets or sets the iDNO for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item.
        /// </field>
        /// <field name="HeatNo" type="String">
        /// Gets or sets the heatNo for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item.
        /// </field>
        /// <field name="Part_No_l2_Drg_BOQ" type="String">
        /// Gets or sets the part_No_l2_Drg_BOQ for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item.
        /// </field>
        /// <field name="Module_ID_l2_Module" type="String">
        /// Gets or sets the module_ID_l2_Module for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item.Details">
        /// Gets the details for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item.
        /// </param>
        /// <field name="Drg_id_l2_drglist" type="String">
        /// Gets or sets the drg_id_l2_drglist for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item.
        /// </field>
        /// <field name="IMIRNO" type="String">
        /// Gets or sets the iMIRNO for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item.
        /// </field>
        /// <field name="IDNO" type="String">
        /// Gets or sets the iDNO for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item.
        /// </field>
        /// <field name="HeatNo" type="String">
        /// Gets or sets the heatNo for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item.
        /// </field>
        /// <field name="Part_No_l2_Drg_BOQ" type="String">
        /// Gets or sets the part_No_l2_Drg_BOQ for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item.
        /// </field>
        /// <field name="Module_ID_l2_Module" type="String">
        /// Gets or sets the module_ID_l2_Module for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item.
        /// </field>
        /// <field name="Drg_ID_3" type="String">
        /// Gets or sets the drg_ID_3 for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item.Details">
        /// Gets the details for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item.
        /// </param>
        /// <field name="Drg_id_l2_drglist" type="String">
        /// Gets or sets the drg_id_l2_drglist for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item.
        /// </field>
        /// <field name="IMIRNO" type="String">
        /// Gets or sets the iMIRNO for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item.
        /// </field>
        /// <field name="IDNO" type="String">
        /// Gets or sets the iDNO for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item.
        /// </field>
        /// <field name="HeatNo" type="String">
        /// Gets or sets the heatNo for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item.
        /// </field>
        /// <field name="Part_No_l2_Drg_BOQ" type="String">
        /// Gets or sets the part_No_l2_Drg_BOQ for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item.
        /// </field>
        /// <field name="Module_ID_l2_Module" type="String">
        /// Gets or sets the module_ID_l2_Module for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item.
        /// </field>
        /// <field name="Drg_ID_4" type="String">
        /// Gets or sets the drg_ID_4 for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item.Details">
        /// Gets the details for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item.
        /// </param>
        /// <field name="Drg_id_l2_drglist" type="String">
        /// Gets or sets the drg_id_l2_drglist for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item.
        /// </field>
        /// <field name="IMIRNO" type="String">
        /// Gets or sets the iMIRNO for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item.
        /// </field>
        /// <field name="IDNO" type="String">
        /// Gets or sets the iDNO for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item.
        /// </field>
        /// <field name="HeatNo" type="String">
        /// Gets or sets the heatNo for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item.
        /// </field>
        /// <field name="Part_No_l2_Drg_BOQ" type="String">
        /// Gets or sets the part_No_l2_Drg_BOQ for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item.
        /// </field>
        /// <field name="Module_ID_l2_Module" type="String">
        /// Gets or sets the module_ID_l2_Module for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item.
        /// </field>
        /// <field name="Drg_ID_5" type="String">
        /// Gets or sets the drg_ID_5 for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item.Details">
        /// Gets the details for this sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_Joint_Details_For_NDEBuffer(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_Joint_Details_For_NDEBuffer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </param>
        /// <field name="DrgNo" type="String">
        /// Gets or sets the drgNo for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="WVF_No" type="String">
        /// Gets or sets the wVF_No for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="Insp_Date" type="Date">
        /// Gets or sets the insp_Date for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="flg_RT" type="String">
        /// Gets or sets the flg_RT for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="flg_UT" type="String">
        /// Gets or sets the flg_UT for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="flg_MT" type="String">
        /// Gets or sets the flg_MT for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="flg_PT" type="String">
        /// Gets or sets the flg_PT for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="flg_PA_UT" type="String">
        /// Gets or sets the flg_PA_UT for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="flg_TOFD_UT" type="String">
        /// Gets or sets the flg_TOFD_UT for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="RT_Per" type="String">
        /// Gets or sets the rT_Per for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="UT_Per" type="String">
        /// Gets or sets the uT_Per for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="MT_Per" type="String">
        /// Gets or sets the mT_Per for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="PT_Per" type="String">
        /// Gets or sets the pT_Per for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="PA_UT_Per" type="String">
        /// Gets or sets the pA_UT_Per for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="TOFD_UT_Per" type="String">
        /// Gets or sets the tOFD_UT_Per for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="Status_RT" type="String">
        /// Gets or sets the status_RT for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="Status_UT" type="String">
        /// Gets or sets the status_UT for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="Status_MT" type="String">
        /// Gets or sets the status_MT for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="Status_PT" type="String">
        /// Gets or sets the status_PT for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="Status_PA_UT" type="String">
        /// Gets or sets the status_PA_UT for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="Status_TOFD_UT" type="String">
        /// Gets or sets the status_TOFD_UT for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="DefLength" type="String">
        /// Gets or sets the defLength for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="Desg" type="String">
        /// Gets or sets the desg for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="Stage" type="String">
        /// Gets or sets the stage for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="ReqFor" type="String">
        /// Gets or sets the reqFor for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_Joint_Details_For_NDEBuffer.Details">
        /// Gets the details for this sps_View_Get_Joint_Details_For_NDEBuffer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_Joint_No_For_WVF(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_Joint_No_For_WVF entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_Joint_No_For_WVF.
        /// </param>
        /// <field name="Project_ID" type="String">
        /// Gets or sets the project_ID for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Joint_Config" type="String">
        /// Gets or sets the joint_Config for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="LenSize" type="String">
        /// Gets or sets the lenSize for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Length1" type="String">
        /// Gets or sets the length1 for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Thickness1" type="String">
        /// Gets or sets the thickness1 for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Material" type="String">
        /// Gets or sets the material for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Weld_Process" type="String">
        /// Gets or sets the weld_Process for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="WPS" type="String">
        /// Gets or sets the wPS for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="FTUStatus" type="String">
        /// Gets or sets the fTUStatus for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="WVFStatus" type="String">
        /// Gets or sets the wVFStatus for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Status_WVF" type="Number">
        /// Gets or sets the status_WVF for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Status_RT" type="String">
        /// Gets or sets the status_RT for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Status_UT" type="String">
        /// Gets or sets the status_UT for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Status_MT" type="String">
        /// Gets or sets the status_MT for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Status_PT" type="String">
        /// Gets or sets the status_PT for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Status_PA_UT" type="String">
        /// Gets or sets the status_PA_UT for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Status_TOFD_UT" type="String">
        /// Gets or sets the status_TOFD_UT for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Joint_Category" type="String">
        /// Gets or sets the joint_Category for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="Desg" type="String">
        /// Gets or sets the desg for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_Joint_No_For_WVF.Details">
        /// Gets the details for this sps_View_Get_Joint_No_For_WVF.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_JointDetail_for_FitupOffer(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_JointDetail_for_FitupOffer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_JointDetail_for_FitupOffer.
        /// </param>
        /// <field name="Drg_ID_1" type="String">
        /// Gets or sets the drg_ID_1 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Drg_ID_2" type="String">
        /// Gets or sets the drg_ID_2 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Drg_ID_3" type="String">
        /// Gets or sets the drg_ID_3 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Drg_ID_4" type="String">
        /// Gets or sets the drg_ID_4 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Drg_ID_5" type="String">
        /// Gets or sets the drg_ID_5 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Part1" type="String">
        /// Gets or sets the part1 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Part2" type="String">
        /// Gets or sets the part2 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Part3" type="String">
        /// Gets or sets the part3 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Part4" type="String">
        /// Gets or sets the part4 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Part5" type="String">
        /// Gets or sets the part5 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="WPS" type="String">
        /// Gets or sets the wPS for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Weld_Process" type="String">
        /// Gets or sets the weld_Process for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="IMIRNO1" type="String">
        /// Gets or sets the iMIRNO1 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="IMIRNO2" type="String">
        /// Gets or sets the iMIRNO2 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="IMIRNO3" type="String">
        /// Gets or sets the iMIRNO3 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="IMIRNO4" type="String">
        /// Gets or sets the iMIRNO4 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="IMIRNO5" type="String">
        /// Gets or sets the iMIRNO5 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="HeatNo1" type="String">
        /// Gets or sets the heatNo1 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="HeatNo2" type="String">
        /// Gets or sets the heatNo2 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="HeatNo3" type="String">
        /// Gets or sets the heatNo3 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="HeatNo4" type="String">
        /// Gets or sets the heatNo4 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="HeatNo5" type="String">
        /// Gets or sets the heatNo5 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="IDNo1" type="String">
        /// Gets or sets the iDNo1 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="IDNo2" type="String">
        /// Gets or sets the iDNo2 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="IDNo3" type="String">
        /// Gets or sets the iDNo3 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="IDNo4" type="String">
        /// Gets or sets the iDNo4 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="IDNo5" type="String">
        /// Gets or sets the iDNo5 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Material1" type="String">
        /// Gets or sets the material1 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Material2" type="String">
        /// Gets or sets the material2 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Material3" type="String">
        /// Gets or sets the material3 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Material4" type="String">
        /// Gets or sets the material4 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Material5" type="String">
        /// Gets or sets the material5 for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="LenSize" type="String">
        /// Gets or sets the lenSize for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Material" type="String">
        /// Gets or sets the material for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="Joint_Category" type="String">
        /// Gets or sets the joint_Category for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="flg_Critical_Joint" type="Boolean">
        /// Gets or sets the flg_Critical_Joint for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_JointDetail_for_FitupOffer.Details">
        /// Gets the details for this sps_View_Get_JointDetail_for_FitupOffer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_JointNo_For_FitUpOffer(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_JointNo_For_FitUpOffer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_JointNo_For_FitUpOffer.
        /// </param>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Joint_Category" type="String">
        /// Gets or sets the joint_Category for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Length" type="String">
        /// Gets or sets the length for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Thickness" type="String">
        /// Gets or sets the thickness for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Material1" type="String">
        /// Gets or sets the material1 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Material2" type="String">
        /// Gets or sets the material2 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Material3" type="String">
        /// Gets or sets the material3 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Material4" type="String">
        /// Gets or sets the material4 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Material5" type="String">
        /// Gets or sets the material5 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="WPS" type="String">
        /// Gets or sets the wPS for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Weld_Process" type="String">
        /// Gets or sets the weld_Process for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part1" type="String">
        /// Gets or sets the part1 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part2" type="String">
        /// Gets or sets the part2 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part3" type="String">
        /// Gets or sets the part3 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part4" type="String">
        /// Gets or sets the part4 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part5" type="String">
        /// Gets or sets the part5 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Drg_ID_1" type="String">
        /// Gets or sets the drg_ID_1 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Drg_ID_2" type="String">
        /// Gets or sets the drg_ID_2 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Drg_ID_3" type="String">
        /// Gets or sets the drg_ID_3 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Drg_ID_4" type="String">
        /// Gets or sets the drg_ID_4 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Drg_ID_5" type="String">
        /// Gets or sets the drg_ID_5 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="IMIRNO1" type="String">
        /// Gets or sets the iMIRNO1 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="IMIRNO2" type="String">
        /// Gets or sets the iMIRNO2 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="IMIRNO3" type="String">
        /// Gets or sets the iMIRNO3 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="IMIRNO4" type="String">
        /// Gets or sets the iMIRNO4 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="IMIRNO5" type="String">
        /// Gets or sets the iMIRNO5 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="HeatNo1" type="String">
        /// Gets or sets the heatNo1 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="HeatNo2" type="String">
        /// Gets or sets the heatNo2 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="HeatNo3" type="String">
        /// Gets or sets the heatNo3 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="HeatNo4" type="String">
        /// Gets or sets the heatNo4 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="HeatNo5" type="String">
        /// Gets or sets the heatNo5 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="IDNo1" type="String">
        /// Gets or sets the iDNo1 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="IDNo2" type="String">
        /// Gets or sets the iDNo2 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="IDNo3" type="String">
        /// Gets or sets the iDNo3 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="IDNo4" type="String">
        /// Gets or sets the iDNo4 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="IDNo5" type="String">
        /// Gets or sets the iDNo5 for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part1Thk" type="String">
        /// Gets or sets the part1Thk for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part2Thk" type="String">
        /// Gets or sets the part2Thk for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part3Thk" type="String">
        /// Gets or sets the part3Thk for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part4Thk" type="String">
        /// Gets or sets the part4Thk for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part5Thk" type="String">
        /// Gets or sets the part5Thk for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part1Len" type="String">
        /// Gets or sets the part1Len for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part2Len" type="String">
        /// Gets or sets the part2Len for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part3Len" type="String">
        /// Gets or sets the part3Len for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part4Len" type="String">
        /// Gets or sets the part4Len for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="Part5Len" type="String">
        /// Gets or sets the part5Len for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_JointNo_For_FitUpOffer.Details">
        /// Gets the details for this sps_View_Get_JointNo_For_FitUpOffer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_MPINo_For_FitupOffer(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_MPINo_For_FitupOffer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_MPINo_For_FitupOffer.
        /// </param>
        /// <field name="MPI_No_l2_MPI" type="String">
        /// Gets or sets the mPI_No_l2_MPI for this sps_View_Get_MPINo_For_FitupOffer.
        /// </field>
        /// <field name="DrgIDFromDrawing" type="String">
        /// Gets or sets the drgIDFromDrawing for this sps_View_Get_MPINo_For_FitupOffer.
        /// </field>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this sps_View_Get_MPINo_For_FitupOffer.
        /// </field>
        /// <field name="Module_ID_l2_Module" type="String">
        /// Gets or sets the module_ID_l2_Module for this sps_View_Get_MPINo_For_FitupOffer.
        /// </field>
        /// <field name="Part_No_l2_Drg_BOQ" type="String">
        /// Gets or sets the part_No_l2_Drg_BOQ for this sps_View_Get_MPINo_For_FitupOffer.
        /// </field>
        /// <field name="joint_no" type="String">
        /// Gets or sets the joint_no for this sps_View_Get_MPINo_For_FitupOffer.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_MPINo_For_FitupOffer.Details">
        /// Gets the details for this sps_View_Get_MPINo_For_FitupOffer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_NDE_Buff_Det_for_Create(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_NDE_Buff_Det_for_Create entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </param>
        /// <field name="DrgNo" type="String">
        /// Gets or sets the drgNo for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="WVF_No" type="String">
        /// Gets or sets the wVF_No for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="Insp_Date" type="Date">
        /// Gets or sets the insp_Date for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="flg_RT" type="String">
        /// Gets or sets the flg_RT for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="flg_UT" type="String">
        /// Gets or sets the flg_UT for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="flg_MT" type="String">
        /// Gets or sets the flg_MT for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="flg_PT" type="String">
        /// Gets or sets the flg_PT for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="flg_PA_UT" type="String">
        /// Gets or sets the flg_PA_UT for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="flg_TOFD_UT" type="String">
        /// Gets or sets the flg_TOFD_UT for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="RT_Per" type="String">
        /// Gets or sets the rT_Per for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="UT_Per" type="String">
        /// Gets or sets the uT_Per for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="MT_Per" type="String">
        /// Gets or sets the mT_Per for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="PT_Per" type="String">
        /// Gets or sets the pT_Per for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="PA_UT_Per" type="String">
        /// Gets or sets the pA_UT_Per for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="TOFD_UT_Per" type="String">
        /// Gets or sets the tOFD_UT_Per for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="Status_RT" type="String">
        /// Gets or sets the status_RT for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="Status_UT" type="String">
        /// Gets or sets the status_UT for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="Status_MT" type="String">
        /// Gets or sets the status_MT for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="Status_PT" type="String">
        /// Gets or sets the status_PT for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="Status_PA_UT" type="String">
        /// Gets or sets the status_PA_UT for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="Status_TOFD_UT" type="String">
        /// Gets or sets the status_TOFD_UT for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_NDE_Buff_Det_for_Create.Details">
        /// Gets the details for this sps_View_Get_NDE_Buff_Det_for_Create.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_Part_No_for_MI_Offer(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_Part_No_for_MI_Offer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_Part_No_for_MI_Offer.
        /// </param>
        /// <field name="Part_No" type="String">
        /// Gets or sets the part_No for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Drg_ID_l2_DrgList" type="String">
        /// Gets or sets the drg_ID_l2_DrgList for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Sapcode" type="String">
        /// Gets or sets the sapcode for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Mat_Desc" type="String">
        /// Gets or sets the mat_Desc for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="SizeDesc" type="String">
        /// Gets or sets the sizeDesc for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Qty_Req" type="String">
        /// Gets or sets the qty_Req for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="RevID" type="String">
        /// Gets or sets the revID for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Rev" type="String">
        /// Gets or sets the rev for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Sheet_No" type="String">
        /// Gets or sets the sheet_No for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Total_Sheets" type="String">
        /// Gets or sets the total_Sheets for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Module_ID" type="String">
        /// Gets or sets the module_ID for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Project_ID_l2_Project" type="String">
        /// Gets or sets the project_ID_l2_Project for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Acc_Qty" type="String">
        /// Gets or sets the acc_Qty for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Accepted" type="String">
        /// Gets or sets the accepted for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Length" type="String">
        /// Gets or sets the length for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Thk" type="String">
        /// Gets or sets the thk for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="Width" type="String">
        /// Gets or sets the width for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_Part_No_for_MI_Offer.Details">
        /// Gets the details for this sps_View_Get_Part_No_for_MI_Offer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_Welder_For_WVF(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_Welder_For_WVF entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_Welder_For_WVF.
        /// </param>
        /// <field name="Welder" type="String">
        /// Gets or sets the welder for this sps_View_Get_Welder_For_WVF.
        /// </field>
        /// <field name="Project_ID_l2_Project" type="String">
        /// Gets or sets the project_ID_l2_Project for this sps_View_Get_Welder_For_WVF.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_Welder_For_WVF.Details">
        /// Gets the details for this sps_View_Get_Welder_For_WVF.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_WVF_For_Delete(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_WVF_For_Delete entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_WVF_For_Delete.
        /// </param>
        /// <field name="Module_Name" type="String">
        /// Gets or sets the module_Name for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="WVF_Date" type="Date">
        /// Gets or sets the wVF_Date for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="WVF_No" type="String">
        /// Gets or sets the wVF_No for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="DrgNo" type="String">
        /// Gets or sets the drgNo for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="WPS_l2_WPS" type="String">
        /// Gets or sets the wPS_l2_WPS for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Weld_Process" type="String">
        /// Gets or sets the weld_Process for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Welder1" type="String">
        /// Gets or sets the welder1 for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Welder2" type="String">
        /// Gets or sets the welder2 for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Welder3" type="String">
        /// Gets or sets the welder3 for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Welder4" type="String">
        /// Gets or sets the welder4 for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Welder5" type="String">
        /// Gets or sets the welder5 for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Welder6" type="String">
        /// Gets or sets the welder6 for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Welder7" type="String">
        /// Gets or sets the welder7 for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Welder8" type="String">
        /// Gets or sets the welder8 for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Welder9" type="String">
        /// Gets or sets the welder9 for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Welder10" type="String">
        /// Gets or sets the welder10 for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="Remark_Det" type="String">
        /// Gets or sets the remark_Det for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="QC_Remark" type="String">
        /// Gets or sets the qC_Remark for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="EXEC_Remark" type="String">
        /// Gets or sets the eXEC_Remark for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="WVFStatus" type="String">
        /// Gets or sets the wVFStatus for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="RTStatus" type="String">
        /// Gets or sets the rTStatus for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="UTStatus" type="String">
        /// Gets or sets the uTStatus for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="MTStatus" type="String">
        /// Gets or sets the mTStatus for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="PTStatus" type="String">
        /// Gets or sets the pTStatus for this sps_View_Get_WVF_For_Delete.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_WVF_For_Delete.Details">
        /// Gets the details for this sps_View_Get_WVF_For_Delete.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_View_Get_WVFListForDelete(entitySet) {
        /// <summary>
        /// Represents the sps_View_Get_WVFListForDelete entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_View_Get_WVFListForDelete.
        /// </param>
        /// <field name="WVF_No" type="String">
        /// Gets or sets the wVF_No for this sps_View_Get_WVFListForDelete.
        /// </field>
        /// <field name="WVF_Date" type="Date">
        /// Gets or sets the wVF_Date for this sps_View_Get_WVFListForDelete.
        /// </field>
        /// <field name="c_Module" type="String">
        /// Gets or sets the c_Module for this sps_View_Get_WVFListForDelete.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this sps_View_Get_WVFListForDelete.
        /// </field>
        /// <field name="details" type="msls.application.sps_View_Get_WVFListForDelete.Details">
        /// Gets the details for this sps_View_Get_WVFListForDelete.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_view_getDrgNo_for_ndeOffer(entitySet) {
        /// <summary>
        /// Represents the sps_view_getDrgNo_for_ndeOffer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_view_getDrgNo_for_ndeOffer.
        /// </param>
        /// <field name="Drg_ID" type="String">
        /// Gets or sets the drg_ID for this sps_view_getDrgNo_for_ndeOffer.
        /// </field>
        /// <field name="Module_ID_l2_Module" type="String">
        /// Gets or sets the module_ID_l2_Module for this sps_view_getDrgNo_for_ndeOffer.
        /// </field>
        /// <field name="details" type="msls.application.sps_view_getDrgNo_for_ndeOffer.Details">
        /// Gets the details for this sps_view_getDrgNo_for_ndeOffer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_WVFDetail(entitySet) {
        /// <summary>
        /// Represents the sps_WVFDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_WVFDetail.
        /// </param>
        /// <field name="WVF_No_l2_WVF" type="String">
        /// Gets or sets the wVF_No_l2_WVF for this sps_WVFDetail.
        /// </field>
        /// <field name="FTU_No_l2_FTU" type="String">
        /// Gets or sets the fTU_No_l2_FTU for this sps_WVFDetail.
        /// </field>
        /// <field name="Joint_ID_l2_Joints" type="String">
        /// Gets or sets the joint_ID_l2_Joints for this sps_WVFDetail.
        /// </field>
        /// <field name="Drg_ID_l2_DrgList" type="String">
        /// Gets or sets the drg_ID_l2_DrgList for this sps_WVFDetail.
        /// </field>
        /// <field name="RevID" type="String">
        /// Gets or sets the revID for this sps_WVFDetail.
        /// </field>
        /// <field name="DCN_No" type="String">
        /// Gets or sets the dCN_No for this sps_WVFDetail.
        /// </field>
        /// <field name="WPS_l2_WPS" type="String">
        /// Gets or sets the wPS_l2_WPS for this sps_WVFDetail.
        /// </field>
        /// <field name="Weld_Process" type="String">
        /// Gets or sets the weld_Process for this sps_WVFDetail.
        /// </field>
        /// <field name="Welder1" type="String">
        /// Gets or sets the welder1 for this sps_WVFDetail.
        /// </field>
        /// <field name="Welder2" type="String">
        /// Gets or sets the welder2 for this sps_WVFDetail.
        /// </field>
        /// <field name="Welder3" type="String">
        /// Gets or sets the welder3 for this sps_WVFDetail.
        /// </field>
        /// <field name="Welder4" type="String">
        /// Gets or sets the welder4 for this sps_WVFDetail.
        /// </field>
        /// <field name="Welder5" type="String">
        /// Gets or sets the welder5 for this sps_WVFDetail.
        /// </field>
        /// <field name="Welder6" type="String">
        /// Gets or sets the welder6 for this sps_WVFDetail.
        /// </field>
        /// <field name="Welder7" type="String">
        /// Gets or sets the welder7 for this sps_WVFDetail.
        /// </field>
        /// <field name="Welder8" type="String">
        /// Gets or sets the welder8 for this sps_WVFDetail.
        /// </field>
        /// <field name="Welder9" type="String">
        /// Gets or sets the welder9 for this sps_WVFDetail.
        /// </field>
        /// <field name="Welder10" type="String">
        /// Gets or sets the welder10 for this sps_WVFDetail.
        /// </field>
        /// <field name="Deleted_By" type="String">
        /// Gets or sets the deleted_By for this sps_WVFDetail.
        /// </field>
        /// <field name="Deleted_Date" type="Date">
        /// Gets or sets the deleted_Date for this sps_WVFDetail.
        /// </field>
        /// <field name="Remark_Det" type="String">
        /// Gets or sets the remark_Det for this sps_WVFDetail.
        /// </field>
        /// <field name="Desg" type="String">
        /// Gets or sets the desg for this sps_WVFDetail.
        /// </field>
        /// <field name="Status" type="Number">
        /// Gets or sets the status for this sps_WVFDetail.
        /// </field>
        /// <field name="QC_Remark_Det" type="String">
        /// Gets or sets the qC_Remark_Det for this sps_WVFDetail.
        /// </field>
        /// <field name="ReasonForDelete" type="String">
        /// Gets or sets the reasonForDelete for this sps_WVFDetail.
        /// </field>
        /// <field name="WPS_WeldProc_Edited_by" type="String">
        /// Gets or sets the wPS_WeldProc_Edited_by for this sps_WVFDetail.
        /// </field>
        /// <field name="WPS_WeldProc_Edited_Date" type="Date">
        /// Gets or sets the wPS_WeldProc_Edited_Date for this sps_WVFDetail.
        /// </field>
        /// <field name="Joint_Config" type="String">
        /// Gets or sets the joint_Config for this sps_WVFDetail.
        /// </field>
        /// <field name="ReasonForRejection" type="String">
        /// Gets or sets the reasonForRejection for this sps_WVFDetail.
        /// </field>
        /// <field name="ReasonForRejectionDesc" type="String">
        /// Gets or sets the reasonForRejectionDesc for this sps_WVFDetail.
        /// </field>
        /// <field name="Length" type="String">
        /// Gets or sets the length for this sps_WVFDetail.
        /// </field>
        /// <field name="Thickness" type="String">
        /// Gets or sets the thickness for this sps_WVFDetail.
        /// </field>
        /// <field name="sps_WVF" type="msls.application.sps_WVF">
        /// Gets or sets the sps_WVF for this sps_WVFDetail.
        /// </field>
        /// <field name="details" type="msls.application.sps_WVFDetail.Details">
        /// Gets the details for this sps_WVFDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sps_WVF(entitySet) {
        /// <summary>
        /// Represents the sps_WVF entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sps_WVF.
        /// </param>
        /// <field name="WVF_No" type="String">
        /// Gets or sets the wVF_No for this sps_WVF.
        /// </field>
        /// <field name="WVF_Date" type="Date">
        /// Gets or sets the wVF_Date for this sps_WVF.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this sps_WVF.
        /// </field>
        /// <field name="Offer_By" type="String">
        /// Gets or sets the offer_By for this sps_WVF.
        /// </field>
        /// <field name="Insp_By" type="String">
        /// Gets or sets the insp_By for this sps_WVF.
        /// </field>
        /// <field name="Insp_Date" type="Date">
        /// Gets or sets the insp_Date for this sps_WVF.
        /// </field>
        /// <field name="Status" type="Number">
        /// Gets or sets the status for this sps_WVF.
        /// </field>
        /// <field name="Edited_By" type="String">
        /// Gets or sets the edited_By for this sps_WVF.
        /// </field>
        /// <field name="Edited_Date" type="Date">
        /// Gets or sets the edited_Date for this sps_WVF.
        /// </field>
        /// <field name="EXEC_Remark" type="String">
        /// Gets or sets the eXEC_Remark for this sps_WVF.
        /// </field>
        /// <field name="QC_Remark" type="String">
        /// Gets or sets the qC_Remark for this sps_WVF.
        /// </field>
        /// <field name="Insp_PlanDate" type="Date">
        /// Gets or sets the insp_PlanDate for this sps_WVF.
        /// </field>
        /// <field name="sps_Contractor_Module" type="msls.application.sps_Contractor_Module">
        /// Gets or sets the sps_Contractor_Module for this sps_WVF.
        /// </field>
        /// <field name="sps_WVFDetails" type="msls.EntityCollection" elementType="msls.application.sps_WVFDetail">
        /// Gets the sps_WVFDetails for this sps_WVF.
        /// </field>
        /// <field name="details" type="msls.application.sps_WVF.Details">
        /// Gets the details for this sps_WVF.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SPS_LSData(dataWorkspace) {
        /// <summary>
        /// Represents the SPS_LSData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="FITUP_ACCEPT_MAINs" type="msls.EntitySet">
        /// Gets the FITUP_ACCEPT_MAINs entity set.
        /// </field>
        /// <field name="GET_CONTRACTORs" type="msls.EntitySet">
        /// Gets the GET_CONTRACTORs entity set.
        /// </field>
        /// <field name="Get_FTU_For_inspect_closeds" type="msls.EntitySet">
        /// Gets the Get_FTU_For_inspect_closeds entity set.
        /// </field>
        /// <field name="GET_INSPECT_For_WVFs" type="msls.EntitySet">
        /// Gets the GET_INSPECT_For_WVFs entity set.
        /// </field>
        /// <field name="GET_INSPECT_MPI_AFTERaccepts" type="msls.EntitySet">
        /// Gets the GET_INSPECT_MPI_AFTERaccepts entity set.
        /// </field>
        /// <field name="GET_MPI_INSPECTs" type="msls.EntitySet">
        /// Gets the GET_MPI_INSPECTs entity set.
        /// </field>
        /// <field name="GET_PWHT_INSPECT_ACCEPTs" type="msls.EntitySet">
        /// Gets the GET_PWHT_INSPECT_ACCEPTs entity set.
        /// </field>
        /// <field name="GET_PWHT_JOINT_ACCEPTs" type="msls.EntitySet">
        /// Gets the GET_PWHT_JOINT_ACCEPTs entity set.
        /// </field>
        /// <field name="GET_QC_INSPECT_MPIs" type="msls.EntitySet">
        /// Gets the GET_QC_INSPECT_MPIs entity set.
        /// </field>
        /// <field name="Hardness_offer_gets" type="msls.EntitySet">
        /// Gets the Hardness_offer_gets entity set.
        /// </field>
        /// <field name="Inspect_WVF_Details" type="msls.EntitySet">
        /// Gets the Inspect_WVF_Details entity set.
        /// </field>
        /// <field name="sps_Contractor_Modules" type="msls.EntitySet">
        /// Gets the sps_Contractor_Modules entity set.
        /// </field>
        /// <field name="sps_Contractors" type="msls.EntitySet">
        /// Gets the sps_Contractors entity set.
        /// </field>
        /// <field name="sps_DrgLists" type="msls.EntitySet">
        /// Gets the sps_DrgLists entity set.
        /// </field>
        /// <field name="sps_FTUDetails" type="msls.EntitySet">
        /// Gets the sps_FTUDetails entity set.
        /// </field>
        /// <field name="sps_FTUs" type="msls.EntitySet">
        /// Gets the sps_FTUs entity set.
        /// </field>
        /// <field name="sps_HardnessDetails" type="msls.EntitySet">
        /// Gets the sps_HardnessDetails entity set.
        /// </field>
        /// <field name="sps_Hardnesses" type="msls.EntitySet">
        /// Gets the sps_Hardnesses entity set.
        /// </field>
        /// <field name="sps_Locations" type="msls.EntitySet">
        /// Gets the sps_Locations entity set.
        /// </field>
        /// <field name="sps_Master_Proceduers" type="msls.EntitySet">
        /// Gets the sps_Master_Proceduers entity set.
        /// </field>
        /// <field name="sps_Matser_CodeOfConstructions" type="msls.EntitySet">
        /// Gets the sps_Matser_CodeOfConstructions entity set.
        /// </field>
        /// <field name="sps_MCR_Details" type="msls.EntitySet">
        /// Gets the sps_MCR_Details entity set.
        /// </field>
        /// <field name="sps_MCRs" type="msls.EntitySet">
        /// Gets the sps_MCRs entity set.
        /// </field>
        /// <field name="sps_Modules" type="msls.EntitySet">
        /// Gets the sps_Modules entity set.
        /// </field>
        /// <field name="sps_MPI_Detail_Insps" type="msls.EntitySet">
        /// Gets the sps_MPI_Detail_Insps entity set.
        /// </field>
        /// <field name="sps_MPI_Detail_Offs" type="msls.EntitySet">
        /// Gets the sps_MPI_Detail_Offs entity set.
        /// </field>
        /// <field name="sps_MPIs" type="msls.EntitySet">
        /// Gets the sps_MPIs entity set.
        /// </field>
        /// <field name="sps_NDEReqDets" type="msls.EntitySet">
        /// Gets the sps_NDEReqDets entity set.
        /// </field>
        /// <field name="sps_NDEReqs" type="msls.EntitySet">
        /// Gets the sps_NDEReqs entity set.
        /// </field>
        /// <field name="sps_Project_Drgs" type="msls.EntitySet">
        /// Gets the sps_Project_Drgs entity set.
        /// </field>
        /// <field name="sps_Projects" type="msls.EntitySet">
        /// Gets the sps_Projects entity set.
        /// </field>
        /// <field name="sps_PWHTDetails" type="msls.EntitySet">
        /// Gets the sps_PWHTDetails entity set.
        /// </field>
        /// <field name="sps_PWHTs" type="msls.EntitySet">
        /// Gets the sps_PWHTs entity set.
        /// </field>
        /// <field name="sps_RR_WVFDetails" type="msls.EntitySet">
        /// Gets the sps_RR_WVFDetails entity set.
        /// </field>
        /// <field name="sps_RR_WVFs" type="msls.EntitySet">
        /// Gets the sps_RR_WVFs entity set.
        /// </field>
        /// <field name="sps_User_Projects" type="msls.EntitySet">
        /// Gets the sps_User_Projects entity set.
        /// </field>
        /// <field name="sps_View_Get_Drg_No_For_NDEs" type="msls.EntitySet">
        /// Gets the sps_View_Get_Drg_No_For_NDEs entity set.
        /// </field>
        /// <field name="sps_View_Get_Drg_No_For_PWHTs" type="msls.EntitySet">
        /// Gets the sps_View_Get_Drg_No_For_PWHTs entity set.
        /// </field>
        /// <field name="sps_View_Get_Drg_No_For_WVFs" type="msls.EntitySet">
        /// Gets the sps_View_Get_Drg_No_For_WVFs entity set.
        /// </field>
        /// <field name="sps_View_Get_DrgNo_For_FitUpOffers" type="msls.EntitySet">
        /// Gets the sps_View_Get_DrgNo_For_FitUpOffers entity set.
        /// </field>
        /// <field name="sps_View_get_DrgNOMFF_For_FitupOffers" type="msls.EntitySet">
        /// Gets the sps_View_get_DrgNOMFF_For_FitupOffers entity set.
        /// </field>
        /// <field name="sps_View_Get_FTUDetail_For_Offers" type="msls.EntitySet">
        /// Gets the sps_View_Get_FTUDetail_For_Offers entity set.
        /// </field>
        /// <field name="sps_View_Get_HeatNo_From_IMIRIDs" type="msls.EntitySet">
        /// Gets the sps_View_Get_HeatNo_From_IMIRIDs entity set.
        /// </field>
        /// <field name="sps_View_Get_IDNO_From_IMIRIDs" type="msls.EntitySet">
        /// Gets the sps_View_Get_IDNO_From_IMIRIDs entity set.
        /// </field>
        /// <field name="sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1" type="msls.EntitySet">
        /// Gets the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1 entity set.
        /// </field>
        /// <field name="sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2" type="msls.EntitySet">
        /// Gets the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2 entity set.
        /// </field>
        /// <field name="sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3" type="msls.EntitySet">
        /// Gets the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3 entity set.
        /// </field>
        /// <field name="sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4" type="msls.EntitySet">
        /// Gets the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4 entity set.
        /// </field>
        /// <field name="sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5" type="msls.EntitySet">
        /// Gets the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5 entity set.
        /// </field>
        /// <field name="sps_View_Get_Joint_Details_For_NDEBuffers" type="msls.EntitySet">
        /// Gets the sps_View_Get_Joint_Details_For_NDEBuffers entity set.
        /// </field>
        /// <field name="sps_View_Get_Joint_No_For_WVFs" type="msls.EntitySet">
        /// Gets the sps_View_Get_Joint_No_For_WVFs entity set.
        /// </field>
        /// <field name="sps_View_Get_JointDetail_for_FitupOffers" type="msls.EntitySet">
        /// Gets the sps_View_Get_JointDetail_for_FitupOffers entity set.
        /// </field>
        /// <field name="sps_View_Get_JointNo_For_FitUpOffers" type="msls.EntitySet">
        /// Gets the sps_View_Get_JointNo_For_FitUpOffers entity set.
        /// </field>
        /// <field name="sps_View_Get_MPINo_For_FitupOffers" type="msls.EntitySet">
        /// Gets the sps_View_Get_MPINo_For_FitupOffers entity set.
        /// </field>
        /// <field name="sps_View_Get_NDE_Buff_Det_for_Creates" type="msls.EntitySet">
        /// Gets the sps_View_Get_NDE_Buff_Det_for_Creates entity set.
        /// </field>
        /// <field name="sps_View_Get_Part_No_for_MI_Offers" type="msls.EntitySet">
        /// Gets the sps_View_Get_Part_No_for_MI_Offers entity set.
        /// </field>
        /// <field name="sps_View_Get_Welder_For_WVFs" type="msls.EntitySet">
        /// Gets the sps_View_Get_Welder_For_WVFs entity set.
        /// </field>
        /// <field name="sps_View_Get_WVF_For_Deletes" type="msls.EntitySet">
        /// Gets the sps_View_Get_WVF_For_Deletes entity set.
        /// </field>
        /// <field name="sps_View_Get_WVFListForDeletes" type="msls.EntitySet">
        /// Gets the sps_View_Get_WVFListForDeletes entity set.
        /// </field>
        /// <field name="sps_view_getDrgNo_for_ndeOffers" type="msls.EntitySet">
        /// Gets the sps_view_getDrgNo_for_ndeOffers entity set.
        /// </field>
        /// <field name="sps_WVFDetails" type="msls.EntitySet">
        /// Gets the sps_WVFDetails entity set.
        /// </field>
        /// <field name="sps_WVFs" type="msls.EntitySet">
        /// Gets the sps_WVFs entity set.
        /// </field>
        /// <field name="details" type="msls.application.SPS_LSData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="SPS_LSData" type="msls.application.SPS_LSData">
        /// Gets the SPS_LSData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        FITUP_ACCEPT_MAIN: $defineEntity(FITUP_ACCEPT_MAIN, [
            { name: "FTU_No", type: String },
            { name: "FTU_Date", type: Date },
            { name: "Insp_PlanDate", type: Date },
            { name: "Module_Name", type: String },
            { name: "UserName", type: String },
            { name: "Contractor", type: String },
            { name: "Module_ID", type: String }
        ]),

        GET_CONTRACTOR: $defineEntity(GET_CONTRACTOR, [
            { name: "Contractor_ID", type: String },
            { name: "Module_ID", type: String },
            { name: "Contractor_Name", type: String }
        ]),

        Get_FTU_For_inspect_closed: $defineEntity(Get_FTU_For_inspect_closed, [
            { name: "Module_ID", type: String },
            { name: "Drg_ID1", type: String },
            { name: "Joint_ID", type: String },
            { name: "Joint_No", type: String },
            { name: "Part1", type: String },
            { name: "Part2", type: String },
            { name: "Part3", type: String },
            { name: "Part4", type: String },
            { name: "Part5", type: String },
            { name: "IMIRNO1", type: String },
            { name: "IMIRNO2", type: String },
            { name: "IMIRNO3", type: String },
            { name: "IMIRNO4", type: String },
            { name: "IMIRNO5", type: String },
            { name: "IDNO1", type: String },
            { name: "IDNO2", type: String },
            { name: "IDNO3", type: String },
            { name: "IDNO4", type: String },
            { name: "IDNO5", type: String },
            { name: "HeatNo1", type: String },
            { name: "HeatNo2", type: String },
            { name: "HeatNo3", type: String },
            { name: "HeatNo4", type: String },
            { name: "HeatNo5", type: String },
            { name: "FTU_No", type: String },
            { name: "Location", type: String },
            { name: "EXEC_Remark", type: String },
            { name: "FTU_Date", type: Date },
            { name: "Offer_By", type: String },
            { name: "Remark_Detail", type: String },
            { name: "DCN_No", type: String },
            { name: "WPS", type: String },
            { name: "Weld_Process", type: String },
            { name: "Joint_Category", type: String }
        ]),

        GET_INSPECT_For_WVF: $defineEntity(GET_INSPECT_For_WVF, [
            { name: "WVF_No", type: String },
            { name: "WVF_Date", type: Date },
            { name: "Insp_PlanDate", type: Date },
            { name: "Module_Name", type: String },
            { name: "UserName", type: String },
            { name: "Contractor", type: String },
            { name: "Module_ID", type: String }
        ]),

        GET_INSPECT_MPI_AFTERaccept: $defineEntity(GET_INSPECT_MPI_AFTERaccept, [
            { name: "MPI_No", type: String },
            { name: "MPI_Date", type: Date },
            { name: "Insp_PlanDate", type: Date },
            { name: "Module_ID_l2_Module", type: String },
            { name: "Module_Name", type: String },
            { name: "Offer_By", type: String }
        ]),

        GET_MPI_INSPECT: $defineEntity(GET_MPI_INSPECT, [
            { name: "MPI_No", type: String },
            { name: "MPI_Date", type: Date },
            { name: "Insp_PlanDate", type: Date },
            { name: "Module_ID_l2_Module", type: String },
            { name: "Module_Name", type: String },
            { name: "Offer_By", type: String },
            { name: "Contractor", type: String }
        ]),

        GET_PWHT_INSPECT_ACCEPT: $defineEntity(GET_PWHT_INSPECT_ACCEPT, [
            { name: "PWHT_No", type: String },
            { name: "DrgNo", type: String },
            { name: "Joint_ID", type: String },
            { name: "Joint_No", type: String },
            { name: "PWHT_Date", type: Date },
            { name: "Authorize_date", type: Date },
            { name: "Authorize_By", type: String },
            { name: "Module_Name", type: String },
            { name: "Module_ID", type: String }
        ]),

        GET_PWHT_JOINT_ACCEPT: $defineEntity(GET_PWHT_JOINT_ACCEPT, [
            { name: "PWHT_No", type: String },
            { name: "Module_ID", type: String },
            { name: "Module_Name", type: String },
            { name: "Authorize_date", type: Date },
            { name: "Location", type: String },
            { name: "Authorize_By", type: String },
            { name: "DrgNo", type: String },
            { name: "Drg_ID", type: String },
            { name: "Rev", type: String },
            { name: "Joint_No", type: String },
            { name: "Joint_ID", type: String },
            { name: "SizeThk", type: String },
            { name: "Heat_Treatment", type: String },
            { name: "Loading_Temp", type: String },
            { name: "Rate_Of_Heating", type: String },
            { name: "Soaking_Temp", type: String },
            { name: "Soaking_Peroid", type: String },
            { name: "Rate_Of_Cooling", type: String },
            { name: "Unloading_Temp", type: String },
            { name: "Remark_QA_Det", type: String },
            { name: "QA_Remark", type: String }
        ]),

        GET_QC_INSPECT_MPI: $defineEntity(GET_QC_INSPECT_MPI, [
            { name: "Module_Name", type: String },
            { name: "Module_ID", type: String },
            { name: "Contractor_Name", type: String },
            { name: "Contractor_ID", type: String },
            { name: "Sr_No", type: String },
            { name: "Drg_ID_l2_DrgList", type: String },
            { name: "Drg_ID_l2_DrgList1", type: String },
            { name: "RevID", type: String },
            { name: "DCN_No", type: String },
            { name: "PARTNO", type: String },
            { name: "Qty_Offer", type: String },
            { name: "Remark_Off_Det", type: String },
            { name: "Qty_Req", type: String },
            { name: "Acc_Qty", type: String },
            { name: "Stock", type: String },
            { name: "Mat_Desc", type: String },
            { name: "Material", type: String },
            { name: "Size_Desc", type: String },
            { name: "Location", type: String },
            { name: "Offer_By", type: String },
            { name: "MPI_Date", type: Date },
            { name: "Remark", type: String },
            { name: "IDMark", type: String },
            { name: "IDUsed", type: String },
            { name: "IMIRNO", type: String },
            { name: "IDNO", type: String },
            { name: "HeatNo", type: String },
            { name: "Qty_Accepted", type: String },
            { name: "Qty_Rejected", type: String },
            { name: "MPI_No", type: String }
        ]),

        Hardness_offer_get: $defineEntity(Hardness_offer_get, [
            { name: "Module_ID", type: String },
            { name: "Drg_ID", type: String },
            { name: "Drg_ID_l2_DrgList", type: String },
            { name: "Joint_ID", type: String },
            { name: "Rev", type: String },
            { name: "Joint_No", type: String }
        ]),

        Inspect_WVF_Detail: $defineEntity(Inspect_WVF_Detail, [
            { name: "Project_ID", type: String },
            { name: "Module_ID", type: String },
            { name: "Drg_ID", type: String },
            { name: "Joint_ID", type: String },
            { name: "Joint_No", type: String },
            { name: "FTU_No_l2_FTU", type: String },
            { name: "WVF_No", type: String },
            { name: "EXEC_Remark", type: String },
            { name: "Offer_By", type: String },
            { name: "WVF_Date", type: Date },
            { name: "WPS_l2_WPS", type: String },
            { name: "Weld_Process", type: String },
            { name: "Welder", type: String },
            { name: "Remark_Det", type: String },
            { name: "DCN_No", type: String },
            { name: "flg_RT", type: String },
            { name: "flg_UT", type: String },
            { name: "flg_MT", type: String },
            { name: "flg_PT", type: String },
            { name: "flg_PA_UT", type: String },
            { name: "flg_TOFD_UT", type: String },
            { name: "RT_Per", type: String },
            { name: "UT_Per", type: String },
            { name: "MT_Per", type: String },
            { name: "PT_Per", type: String },
            { name: "PA_UT_Per", type: String },
            { name: "TOFD_UT_Per", type: String },
            { name: "RT_Status", type: String },
            { name: "UT_Status", type: String },
            { name: "MT_Status", type: String },
            { name: "PT_Status", type: String },
            { name: "PA_UT_Status", type: String },
            { name: "TOFD_UT_Status", type: String },
            { name: "NDE_Per_Type", type: String },
            { name: "DefLength", type: String },
            { name: "Desg", type: String },
            { name: "NDEPLan", type: String },
            { name: "Joint_Category", type: String },
            { name: "Joint_Config", type: String },
            { name: "Length1", type: String }
        ]),

        sps_Contractor_Module: $defineEntity(sps_Contractor_Module, [
            { name: "Contractor_ID_l2_Contractor", type: String },
            { name: "Module_ID", type: String },
            { name: "sps_Contractor", kind: "reference", type: sps_Contractor },
            { name: "sps_Module", kind: "reference", type: sps_Module },
            { name: "sps_FTUs", kind: "collection", elementType: sps_FTU },
            { name: "sps_Hardnesses", kind: "collection", elementType: sps_Hardness },
            { name: "sps_MCRs", kind: "collection", elementType: sps_MCR },
            { name: "sps_MPIs", kind: "collection", elementType: sps_MPI },
            { name: "sps_NDEReqs", kind: "collection", elementType: sps_NDEReq },
            { name: "sps_RR_WVFs", kind: "collection", elementType: sps_RR_WVF },
            { name: "sps_WVFs", kind: "collection", elementType: sps_WVF }
        ]),

        sps_Contractor: $defineEntity(sps_Contractor, [
            { name: "Plant", type: String },
            { name: "Contractor_ID", type: String },
            { name: "Contractor_Name", type: String },
            { name: "Address", type: String },
            { name: "Contact_No", type: String },
            { name: "Active", type: Boolean },
            { name: "New_ID", type: String },
            { name: "sps_Contractor_Modules", kind: "collection", elementType: sps_Contractor_Module }
        ]),

        sps_DrgList: $defineEntity(sps_DrgList, [
            { name: "Drg_ID", type: String },
            { name: "Drg_No_MFF", type: String },
            { name: "Drg_No_Client", type: String },
            { name: "Drg_No_PMT", type: String },
            { name: "Rev", type: String },
            { name: "Sheet_No", type: String },
            { name: "Total_Sheets", type: String },
            { name: "OnDate", type: Date },
            { name: "Drg_Status", type: Number },
            { name: "UserID", type: String },
            { name: "Edited_By", type: String },
            { name: "Edited_Date", type: Date },
            { name: "Deleted_By", type: String },
            { name: "Deleted_Date", type: Date },
            { name: "ICSNO", type: String },
            { name: "ICSDate", type: Date },
            { name: "Drg_Title", type: String },
            { name: "NW_MAP_Date", type: Date },
            { name: "NW_MAP_REV", type: String },
            { name: "NW_MAP_Prepared_By", type: String },
            { name: "NW_MAP_Checked_Apprv_By", type: String },
            { name: "NW_MAP_Reviewed_By", type: String },
            { name: "NW_MAP_REV_Lock", type: Boolean },
            { name: "DIN_Current_Status", type: String },
            { name: "Issue_No", type: Number },
            { name: "Uploaded_FilePath_PDF", type: String },
            { name: "PDF_UploadedBy", type: String },
            { name: "PDF_UploadedDate", type: Date },
            { name: "Uploaded_FilePath_DWG", type: String },
            { name: "DWG_UploadedBy", type: String },
            { name: "DWG_UploadedDate", type: Date },
            { name: "Drg_Weight", type: String },
            { name: "sps_Module", kind: "reference", type: sps_Module },
            { name: "sps_MPI_Detail_Offs", kind: "collection", elementType: sps_MPI_Detail_Off }
        ]),

        sps_FTUDetail: $defineEntity(sps_FTUDetail, [
            { name: "FTU_No_l2_FTU", type: String },
            { name: "Joint_ID_l2_Joints", type: String },
            { name: "Drg_ID_l2_DrgList", type: String },
            { name: "Part1", type: String },
            { name: "Drg_ID_2", type: String },
            { name: "Part2", type: String },
            { name: "Drg_ID_3", type: String },
            { name: "Part3", type: String },
            { name: "Drg_ID_4", type: String },
            { name: "Part4", type: String },
            { name: "Drg_ID_5", type: String },
            { name: "Part5", type: String },
            { name: "RevID", type: String },
            { name: "DCN_No", type: String },
            { name: "SizeThk", type: String },
            { name: "IMIRNO1", type: String },
            { name: "IMIRNO2", type: String },
            { name: "IMIRNO3", type: String },
            { name: "IMIRNO4", type: String },
            { name: "IMIRNO5", type: String },
            { name: "IMIRSrNO1", type: String },
            { name: "IMIRSrNO2", type: String },
            { name: "IMIRSrNO3", type: String },
            { name: "IMIRSrNO4", type: String },
            { name: "IMIRSrNO5", type: String },
            { name: "IDNoSAP1", type: String },
            { name: "IDNoSAP2", type: String },
            { name: "IDNoSAP3", type: String },
            { name: "IDNoSAP4", type: String },
            { name: "IDNoSAP5", type: String },
            { name: "HeatNo1", type: String },
            { name: "HeatNo2", type: String },
            { name: "HeatNo3", type: String },
            { name: "HeatNo4", type: String },
            { name: "HeatNo5", type: String },
            { name: "IDNo1", type: String },
            { name: "IDNo2", type: String },
            { name: "IDNo3", type: String },
            { name: "IDNo4", type: String },
            { name: "IDNo5", type: String },
            { name: "MPI_No1_l2_MPI", type: String },
            { name: "MPI_No2_l2_MPI", type: String },
            { name: "MPI_No3_l2_MPI", type: String },
            { name: "MPI_No4_l2_MPI", type: String },
            { name: "MPI_No5_l2_MPI", type: String },
            { name: "Remark_Detail", type: String },
            { name: "Remark_Detail_QC", type: String },
            { name: "Deleted_By", type: String },
            { name: "Deleted_Date", type: Date },
            { name: "Status", type: Number },
            { name: "ReasonForDelete", type: String },
            { name: "IMIR_ID_HeatNo_Edited_By", type: String },
            { name: "IMIR_ID_HeatNo_EditedDate", type: Date },
            { name: "flg_Critical_Joint", type: Boolean },
            { name: "ReasonForRejection", type: String },
            { name: "ReasonForRejectionDesc", type: String },
            { name: "sps_FTU", kind: "reference", type: sps_FTU },
            { name: "imageurl", type: String }
        ]),

        sps_FTU: $defineEntity(sps_FTU, [
            { name: "FTU_No", type: String },
            { name: "FTU_Date", type: Date },
            { name: "Location", type: String },
            { name: "Offer_By", type: String },
            { name: "Insp_By", type: String },
            { name: "Insp_Date", type: Date },
            { name: "Status", type: Number },
            { name: "QC_Remark", type: String },
            { name: "EXEC_Remark", type: String },
            { name: "SketchReport", type: String },
            { name: "IDMark", type: String },
            { name: "IDUsed", type: String },
            { name: "Insp_PlanDate", type: Date },
            { name: "sps_Contractor_Module", kind: "reference", type: sps_Contractor_Module },
            { name: "sps_FTUDetails", kind: "collection", elementType: sps_FTUDetail }
        ]),

        sps_HardnessDetail: $defineEntity(sps_HardnessDetail, [
            { name: "Hardness_No", type: String },
            { name: "SrNo", type: String },
            { name: "Joint_ID_l2_Joints", type: String },
            { name: "Drg_ID_l2_DrgList", type: String },
            { name: "RevID", type: String },
            { name: "DCN_No", type: String },
            { name: "Base_Metal1_Max", type: String },
            { name: "Weld_Max", type: String },
            { name: "Haz_Max1", type: String },
            { name: "Base_Metal2_Max", type: String },
            { name: "Haz2_Max", type: String },
            { name: "Remark_Detail", type: String },
            { name: "Remark_Detail_QC", type: String },
            { name: "Deleted_By", type: String },
            { name: "Deleted_Date", type: Date },
            { name: "Status", type: Number },
            { name: "ReasonForDelete", type: String },
            { name: "sps_Hardness", kind: "reference", type: sps_Hardness }
        ]),

        sps_Hardness: $defineEntity(sps_Hardness, [
            { name: "Hardness_No", type: String },
            { name: "Hardness_Date", type: Date },
            { name: "Location", type: String },
            { name: "Offer_By", type: String },
            { name: "Insp_By", type: String },
            { name: "Insp_Date", type: Date },
            { name: "Status", type: Number },
            { name: "QC_Remark", type: String },
            { name: "EXEC_Remark", type: String },
            { name: "Insp_PlanDate", type: Date },
            { name: "InstID_No", type: String },
            { name: "Cal_Due_Dt", type: Date },
            { name: "AcceptanceValue", type: String },
            { name: "sps_Contractor_Module", kind: "reference", type: sps_Contractor_Module },
            { name: "sps_HardnessDetails", kind: "collection", elementType: sps_HardnessDetail }
        ]),

        sps_Location: $defineEntity(sps_Location, [
            { name: "Plant", type: String },
            { name: "Location", type: String },
            { name: "ProjectID", type: String },
            { name: "Active", type: Boolean }
        ]),

        sps_Master_Proceduer: $defineEntity(sps_Master_Proceduer, [
            { name: "Report_Type", type: String },
            { name: "Procedures", type: String },
            { name: "ProjectID", type: String },
            { name: "Active", type: Boolean }
        ]),

        sps_Matser_CodeOfConstruction: $defineEntity(sps_Matser_CodeOfConstruction, [
            { name: "Code_Of_Construction", type: String },
            { name: "ProjectID", type: String },
            { name: "Active", type: Boolean }
        ]),

        sps_MCR_Detail: $defineEntity(sps_MCR_Detail, [
            { name: "MCR_No_l2_MCR", type: String },
            { name: "Drg_No_L2_Drg", type: String },
            { name: "Sr_No", type: String },
            { name: "Part_No", type: String },
            { name: "MPI_No_l2_MPI", type: String },
            { name: "SizeThk", type: String },
            { name: "Mat_Desc", type: String },
            { name: "Imir_ID", type: String },
            { name: "RevID", type: String },
            { name: "ID_No", type: String },
            { name: "Heat_No", type: String },
            { name: "Qty", type: String },
            { name: "Makers_Name", type: String },
            { name: "Certificate_No", type: String },
            { name: "LTRemark_DCR_NCR", type: String },
            { name: "Status", type: Number },
            { name: "ReasonForDelete", type: String },
            { name: "Deleted_By", type: String },
            { name: "Deleted_Date", type: Date },
            { name: "Plate_No", type: String },
            { name: "Old_ReportNo", type: String },
            { name: "sps_MCR", kind: "reference", type: sps_MCR }
        ]),

        sps_MCR: $defineEntity(sps_MCR, [
            { name: "MCR_No", type: String },
            { name: "Drg_ID_l2_Drg", type: String },
            { name: "RevID", type: String },
            { name: "Project_ID", type: String },
            { name: "MCR_Date", type: Date },
            { name: "MCR_By", type: String },
            { name: "Remark", type: String },
            { name: "Insp_PlanDate", type: Date },
            { name: "Old_ReportNo", type: String },
            { name: "sps_MCR_Details", kind: "collection", elementType: sps_MCR_Detail },
            { name: "sps_Contractor_Module", kind: "reference", type: sps_Contractor_Module }
        ]),

        sps_Module: $defineEntity(sps_Module, [
            { name: "Module_ID", type: String },
            { name: "Module_Name", type: String },
            { name: "Module_Desc", type: String },
            { name: "XNO_Def", type: String },
            { name: "XNO_Seq", type: String },
            { name: "Active", type: Boolean },
            { name: "Insp_Agency", type: String },
            { name: "DrgIssueNo", type: Number },
            { name: "Module_Yard_location", type: String },
            { name: "flg_Part2_NonMandatory", type: Boolean },
            { name: "sap_Module_ID", type: String },
            { name: "sps_Contractor_Modules", kind: "collection", elementType: sps_Contractor_Module },
            { name: "sps_DrgLists", kind: "collection", elementType: sps_DrgList },
            { name: "sps_Project", kind: "reference", type: sps_Project },
            { name: "sps_PWHTs", kind: "collection", elementType: sps_PWHT }
        ]),

        sps_MPI_Detail_Insp: $defineEntity(sps_MPI_Detail_Insp, [
            { name: "MPI_No_l2_MPI", type: String },
            { name: "Sr_No", type: String },
            { name: "Drg_ID_l2_DrgList", type: String },
            { name: "RevID", type: String },
            { name: "DCN_No", type: String },
            { name: "Part_No_l2_Drg_BOQ", type: String },
            { name: "Qty_Insp", type: String },
            { name: "Qty_Accepted", type: String },
            { name: "Qty_Rejected", type: String },
            { name: "IMIRNO", type: String },
            { name: "IDNO", type: String },
            { name: "HeatNo", type: String },
            { name: "Remark_InspDet", type: String },
            { name: "MPI_Inspected_Date", type: Date },
            { name: "MPI_Inspected_By", type: String },
            { name: "QC_Remark_Det", type: String },
            { name: "status_MCR", type: Boolean },
            { name: "sps_MPI", kind: "reference", type: sps_MPI }
        ]),

        sps_MPI_Detail_Off: $defineEntity(sps_MPI_Detail_Off, [
            { name: "MPI_No_l2_MPI", type: String },
            { name: "Sr_No", type: String },
            { name: "RevID", type: String },
            { name: "DCN_No", type: String },
            { name: "Part_No_l2_Drg_BOQ", type: String },
            { name: "SizeThk", type: String },
            { name: "Mat_Desc", type: String },
            { name: "IMIRNO", type: String },
            { name: "IMIRSrNO", type: String },
            { name: "IDNOSAP", type: String },
            { name: "IDNO", type: String },
            { name: "HeatNo", type: String },
            { name: "MPI_Det_Status", type: Number },
            { name: "Qty_Offer", type: String },
            { name: "Qty_Insp_Pending", type: String },
            { name: "Qty_Insp", type: String },
            { name: "Qty_Accepted", type: String },
            { name: "Qty_Rejected", type: String },
            { name: "Remark_InspDet", type: String },
            { name: "MPI_Inspected_Date", type: Date },
            { name: "MPI_Inspected_By", type: String },
            { name: "QC_Remark_Det", type: String },
            { name: "status_MCR", type: Boolean },
            { name: "Remark_Off_Det", type: String },
            { name: "MPI_Edited_By", type: String },
            { name: "MPI_Edited_Date", type: Date },
            { name: "Material", type: String },
            { name: "IMIR_ID_HeatNo_Edited_By", type: String },
            { name: "IMIR_ID_HeatNo_EditedDate", type: Date },
            { name: "New_ReportNo", type: String },
            { name: "Old_ReportNo", type: String },
            { name: "sps_DrgList", kind: "reference", type: sps_DrgList },
            { name: "sps_MPI", kind: "reference", type: sps_MPI }
        ]),

        sps_MPI: $defineEntity(sps_MPI, [
            { name: "MPI_No", type: String },
            { name: "MPI_Date", type: Date },
            { name: "MPI_Status", type: Number },
            { name: "Location", type: String },
            { name: "Offer_By", type: String },
            { name: "Edited_By", type: String },
            { name: "Edited_Date", type: Date },
            { name: "Insp_By", type: String },
            { name: "Insp_Date", type: Date },
            { name: "QC_Remark", type: String },
            { name: "EXEC_Remark", type: String },
            { name: "Remark", type: String },
            { name: "IDMark", type: String },
            { name: "IDUsed", type: String },
            { name: "Insp_PlanDate", type: Date },
            { name: "New_ReportNo", type: String },
            { name: "Old_ReportNo", type: String },
            { name: "sps_Contractor_Module", kind: "reference", type: sps_Contractor_Module },
            { name: "sps_MPI_Detail_Insps", kind: "collection", elementType: sps_MPI_Detail_Insp },
            { name: "sps_MPI_Detail_Offs", kind: "collection", elementType: sps_MPI_Detail_Off }
        ]),

        sps_NDEReqDet: $defineEntity(sps_NDEReqDet, [
            { name: "NDE_Req_No_l2_NDEReq", type: String },
            { name: "Joint_ID_l2_Joints", type: String },
            { name: "RR_WVF_No", type: String },
            { name: "WVF_No_l2_WVF", type: String },
            { name: "Joint_No", type: String },
            { name: "XNO", type: String },
            { name: "Seam_Size", type: String },
            { name: "Material", type: String },
            { name: "Material1", type: String },
            { name: "Material2", type: String },
            { name: "Material3", type: String },
            { name: "Acc_Std", type: String },
            { name: "WPS_l2_WPS", type: String },
            { name: "Weld_Process", type: String },
            { name: "Welder", type: String },
            { name: "LengthRTPer", type: String },
            { name: "LengthUTPer", type: String },
            { name: "LengthPTPer", type: String },
            { name: "LengthMTPer", type: String },
            { name: "Remark_Det", type: String },
            { name: "LTRemark", type: String },
            { name: "TPIRemark", type: String },
            { name: "Edited_By", type: String },
            { name: "Edited_Date", type: Date },
            { name: "Deleted_By", type: String },
            { name: "Deleted_Date", type: Date },
            { name: "Status", type: String },
            { name: "ReportNo", type: String },
            { name: "Result", type: String },
            { name: "ReasonForDelete", type: String },
            { name: "Status_WVF_Allow_After_Rep", type: Number },
            { name: "Status_RR_WVF_Allow_After_Rep", type: Number },
            { name: "WPS_WeldProc_Edited_by", type: String },
            { name: "WPS_WeldProc_Edited_Date", type: Date },
            { name: "Witness_Status", type: String },
            { name: "Joint_Category", type: String },
            { name: "NOT_Ready_By", type: String },
            { name: "NOT_Ready_Dt", type: Date },
            { name: "NOT_Ready_Rem", type: String },
            { name: "Joint_Config", type: String },
            { name: "Buffer_Created_By", type: String },
            { name: "Buffer_Created_Date", type: Date },
            { name: "New_ReportNo", type: String },
            { name: "Old_ReportNo", type: String },
            { name: "sps_NDEReq", kind: "reference", type: sps_NDEReq }
        ]),

        sps_NDEReq: $defineEntity(sps_NDEReq, [
            { name: "NDE_Req_No", type: String },
            { name: "NDE_Req_Date", type: Date },
            { name: "Req_To", type: String },
            { name: "Req_For", type: String },
            { name: "Insp_Agency", type: String },
            { name: "Drg_ID_l2_DrgList", type: String },
            { name: "Rev_l2_DrgList", type: String },
            { name: "Stage", type: String },
            { name: "Location", type: String },
            { name: "Checked_By", type: String },
            { name: "Offered_By", type: String },
            { name: "Status", type: String },
            { name: "Remark", type: String },
            { name: "New_ReportNo", type: String },
            { name: "Old_ReportNo", type: String },
            { name: "sps_Contractor_Module", kind: "reference", type: sps_Contractor_Module },
            { name: "sps_NDEReqDets", kind: "collection", elementType: sps_NDEReqDet }
        ]),

        sps_Project_Drg: $defineEntity(sps_Project_Drg, [
            { name: "Project_ID", type: String },
            { name: "Project_Name", type: String },
            { name: "Module_ID", type: String },
            { name: "Module_Name", type: String },
            { name: "Contractor_Name", type: String },
            { name: "Drg_ID", type: String },
            { name: "Drg_No_MFF", type: String },
            { name: "Drg_No_Client", type: String },
            { name: "Rev", type: String },
            { name: "Sheet_No", type: String },
            { name: "Total_Sheets", type: String },
            { name: "SheetID", type: String },
            { name: "Print_Drawing", type: String },
            { name: "flg_Rep_No_With_Module", type: Boolean },
            { name: "flg_Parent_WONo", type: Boolean },
            { name: "Agency_Type1", type: String },
            { name: "Agency_Type2", type: String },
            { name: "Agency_Type3", type: String },
            { name: "flg_IMIRIDNO_With_Qty_Split", type: Boolean },
            { name: "Contractor_ID", type: String, isReadOnly: true }
        ]),

        sps_Project: $defineEntity(sps_Project, [
            { name: "Plant", type: String },
            { name: "Project_ID", type: String },
            { name: "Project_Name", type: String },
            { name: "Project_Desc", type: String },
            { name: "Client", type: String },
            { name: "Start_Date", type: Date },
            { name: "End_Date", type: Date },
            { name: "Insp_Agency", type: String },
            { name: "Print_Drawing", type: String },
            { name: "Active", type: Boolean },
            { name: "QCP_No", type: String },
            { name: "QCP_Stage_No", type: String },
            { name: "RMI_Seq", type: String },
            { name: "TPI", type: String },
            { name: "CA", type: String },
            { name: "AI", type: String },
            { name: "PMC_CLIENT", type: String },
            { name: "Agency_Type1", type: String },
            { name: "Agency_Type2", type: String },
            { name: "Agency_Type3", type: String },
            { name: "flg_Rep_No_With_Module", type: Boolean },
            { name: "flg_Parent_WONo", type: Boolean },
            { name: "flg_Drg_Prn_DrgNo", type: Boolean },
            { name: "flg_Drg_Prn_SheetNo", type: Boolean },
            { name: "flg_Drg_Prn_RevNo", type: Boolean },
            { name: "flg_AutoBuffer_for_WEL_Dissable", type: Boolean },
            { name: "flg_IMIRIDNO_With_Qty_Split", type: Boolean },
            { name: "flg_Ignore_Welder_In_Cover", type: Boolean },
            { name: "flg_Tubular_Mandatory", type: Boolean },
            { name: "flg_PlateNo_In_MCR", type: Boolean },
            { name: "flg_Hardness_Required_After_Repair", type: Boolean },
            { name: "flg_Drg_Prn_DrgNo_Client", type: Boolean },
            { name: "flg_Drg_Prn_DrgNo_PMT", type: Boolean },
            { name: "flg_Automatic_NDE_Req_Offer", type: Boolean },
            { name: "flg_Rep_No_With_Module_In_Det_col", type: Boolean },
            { name: "sps_Modules", kind: "collection", elementType: sps_Module },
            { name: "sps_User_Projects", kind: "collection", elementType: sps_User_Project }
        ]),

        sps_PWHTDetail: $defineEntity(sps_PWHTDetail, [
            { name: "PWHT_No_l2_PWHT", type: String },
            { name: "Joint_ID_l2_Joints", type: String },
            { name: "Drg_ID_l2_DrgList", type: String },
            { name: "RevID", type: String },
            { name: "Insp_Agency", type: String },
            { name: "Heat_Treatment", type: String },
            { name: "HT_Processes", type: String },
            { name: "Furnance_Loaded", type: String },
            { name: "Loading_Temp", type: String },
            { name: "Soaking_Temp", type: String },
            { name: "Soaking_Peroid", type: String },
            { name: "Rate_Of_Heating", type: String },
            { name: "Soaking_Temp_From", type: String },
            { name: "Soaking_Temp_To", type: String },
            { name: "Soaking_Time_Hr", type: String },
            { name: "Soaking_Time_Min", type: String },
            { name: "Rate_Of_Cooling", type: String },
            { name: "Unloading_Temp", type: String },
            { name: "Deleted_By", type: String },
            { name: "Deleted_Date", type: Date },
            { name: "ReasonForDelete", type: String },
            { name: "Remark_Off_Det", type: String },
            { name: "Remark_QA_Det", type: String },
            { name: "Status", type: Number },
            { name: "New_ReportNo", type: String },
            { name: "Old_ReportNo", type: String },
            { name: "sps_PWHT", kind: "reference", type: sps_PWHT }
        ]),

        sps_PWHT: $defineEntity(sps_PWHT, [
            { name: "PWHT_No", type: String },
            { name: "PWHT_Date", type: Date },
            { name: "Instruction1", type: String },
            { name: "Instruction2", type: String },
            { name: "Location", type: String },
            { name: "Offer_By", type: String },
            { name: "Authorize_By", type: String },
            { name: "Authorize_date", type: Date },
            { name: "Insp_By", type: String },
            { name: "Insp_Date", type: Date },
            { name: "Status", type: String },
            { name: "Remark", type: String },
            { name: "QA_Remark", type: String },
            { name: "Remark1", type: String },
            { name: "Remark2", type: String },
            { name: "Remark3", type: String },
            { name: "Remark4", type: String },
            { name: "New_ReportNo", type: String },
            { name: "Old_ReportNo", type: String },
            { name: "sps_Module", kind: "reference", type: sps_Module },
            { name: "sps_PWHTDetails", kind: "collection", elementType: sps_PWHTDetail }
        ]),

        sps_RR_WVFDetail: $defineEntity(sps_RR_WVFDetail, [
            { name: "RR_WVF_No", type: String },
            { name: "FTU_No_l2_FTU", type: String },
            { name: "Joint_ID_l2_Joints", type: String },
            { name: "Drg_ID_l2_DrgList", type: String },
            { name: "RevID", type: String },
            { name: "DCN_No", type: String },
            { name: "WPS_l2_WPS", type: String },
            { name: "Weld_Process", type: String },
            { name: "Welder1", type: String },
            { name: "Welder2", type: String },
            { name: "Welder3", type: String },
            { name: "Welder4", type: String },
            { name: "Welder5", type: String },
            { name: "Desg", type: String },
            { name: "Deleted_By", type: String },
            { name: "Deleted_Date", type: Date },
            { name: "Remark_Det", type: String },
            { name: "Status", type: Number },
            { name: "QC_Remark_Det", type: String },
            { name: "ReasonForDelete", type: String },
            { name: "WPS_WeldProc_Edited_by", type: String },
            { name: "WPS_WeldProc_Edited_Date", type: Date },
            { name: "New_ReportNo", type: String },
            { name: "sps_RR_WVF", kind: "reference", type: sps_RR_WVF }
        ]),

        sps_RR_WVF: $defineEntity(sps_RR_WVF, [
            { name: "RR_WVF_No", type: String },
            { name: "RR_WVF_Date", type: Date },
            { name: "Location", type: String },
            { name: "Offer_By", type: String },
            { name: "Insp_By", type: String },
            { name: "Insp_Date", type: Date },
            { name: "Status", type: Number },
            { name: "Edited_By", type: String },
            { name: "Edited_Date", type: Date },
            { name: "EXEC_Remark", type: String },
            { name: "QC_Remark", type: String },
            { name: "Insp_PlanDate", type: Date },
            { name: "sps_Contractor_Module", kind: "reference", type: sps_Contractor_Module },
            { name: "sps_RR_WVFDetails", kind: "collection", elementType: sps_RR_WVFDetail }
        ]),

        sps_User_Project: $defineEntity(sps_User_Project, [
            { name: "UserID_l2_User", type: String },
            { name: "Project_ID_Project", type: String },
            { name: "Active", type: Boolean },
            { name: "sps_Project", kind: "reference", type: sps_Project }
        ]),

        sps_View_Get_Drg_No_For_NDE: $defineEntity(sps_View_Get_Drg_No_For_NDE, [
            { name: "DrgNo", type: String },
            { name: "Module_ID", type: String }
        ]),

        sps_View_Get_Drg_No_For_PWHT: $defineEntity(sps_View_Get_Drg_No_For_PWHT, [
            { name: "Drg_ID", type: String },
            { name: "Material1", type: String },
            { name: "Project_ID", type: String },
            { name: "Project_Name", type: String },
            { name: "Module_ID", type: String },
            { name: "Module_Name", type: String },
            { name: "Drg_ID_l2_DrgList", type: String },
            { name: "drg_no", type: String },
            { name: "Joint_ID", type: String },
            { name: "Joint_No", type: String },
            { name: "flg_PWHT", type: Boolean },
            { name: "Insp_Agency", type: String },
            { name: "DSC", type: String }
        ]),

        sps_View_Get_Drg_No_For_WVF: $defineEntity(sps_View_Get_Drg_No_For_WVF, [
            { name: "Module_ID", type: String },
            { name: "Drg_ID", type: String },
            { name: "Project_ID", type: String },
            { name: "Joint_Category", type: String },
            { name: "Desg", type: String },
            { name: "FTUStatus", type: String },
            { name: "WVFStatus", type: String },
            { name: "Status_WVF", type: Number },
            { name: "Status_RT", type: String },
            { name: "Status_UT", type: String },
            { name: "Status_MT", type: String },
            { name: "Status_PT", type: String },
            { name: "Status_PA_UT", type: String },
            { name: "Status_TOFD_UT", type: String },
            { name: "Rev", type: String }
        ]),

        sps_View_Get_DrgNo_For_FitUpOffer: $defineEntity(sps_View_Get_DrgNo_For_FitUpOffer, [
            { name: "Drg_ID", type: String },
            { name: "Rev", type: String },
            { name: "Sheet_No", type: String },
            { name: "Total_Sheets", type: String },
            { name: "Module_ID_l2_Module", type: String },
            { name: "Drg_No_MFF", type: String }
        ]),

        sps_View_get_DrgNOMFF_For_FitupOffer: $defineEntity(sps_View_get_DrgNOMFF_For_FitupOffer, [
            { name: "Drg_No_MFF", type: String },
            { name: "Drg_ID", type: String }
        ]),

        sps_View_Get_FTUDetail_For_Offer: $defineEntity(sps_View_Get_FTUDetail_For_Offer, [
            { name: "Module_ID", type: String },
            { name: "c_Module", type: String },
            { name: "Drg_ID", type: String },
            { name: "Joint_ID", type: String },
            { name: "Joint_No", type: String },
            { name: "Status_FTU", type: Number },
            { name: "FTUStatus", type: String }
        ]),

        sps_View_Get_HeatNo_From_IMIRID: $defineEntity(sps_View_Get_HeatNo_From_IMIRID, [
            { name: "HeatNo", type: String },
            { name: "IDCode", type: String },
            { name: "IMIRID", type: String }
        ]),

        sps_View_Get_IDNO_From_IMIRID: $defineEntity(sps_View_Get_IDNO_From_IMIRID, [
            { name: "IDNo", type: String },
            { name: "IMIRID", type: String }
        ]),

        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item: $defineEntity(sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item, [
            { name: "Drg_id_l2_drglist", type: String },
            { name: "Joint_No", type: String },
            { name: "Drg_ID", type: String },
            { name: "IMIRNO", type: String },
            { name: "IDNO", type: String },
            { name: "HeatNo", type: String },
            { name: "Part_No_l2_Drg_BOQ", type: String },
            { name: "Module_ID_l2_Module", type: String }
        ]),

        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item: $defineEntity(sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item, [
            { name: "Drg_id_l2_drglist", type: String },
            { name: "Joint_No", type: String },
            { name: "Drg_ID_2", type: String },
            { name: "IMIRNO", type: String },
            { name: "IDNO", type: String },
            { name: "HeatNo", type: String },
            { name: "Part_No_l2_Drg_BOQ", type: String },
            { name: "Module_ID_l2_Module", type: String }
        ]),

        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item: $defineEntity(sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item, [
            { name: "Drg_id_l2_drglist", type: String },
            { name: "Joint_No", type: String },
            { name: "IMIRNO", type: String },
            { name: "IDNO", type: String },
            { name: "HeatNo", type: String },
            { name: "Part_No_l2_Drg_BOQ", type: String },
            { name: "Module_ID_l2_Module", type: String },
            { name: "Drg_ID_3", type: String }
        ]),

        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item: $defineEntity(sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item, [
            { name: "Drg_id_l2_drglist", type: String },
            { name: "Joint_No", type: String },
            { name: "IMIRNO", type: String },
            { name: "IDNO", type: String },
            { name: "HeatNo", type: String },
            { name: "Part_No_l2_Drg_BOQ", type: String },
            { name: "Module_ID_l2_Module", type: String },
            { name: "Drg_ID_4", type: String }
        ]),

        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item: $defineEntity(sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item, [
            { name: "Drg_id_l2_drglist", type: String },
            { name: "Joint_No", type: String },
            { name: "IMIRNO", type: String },
            { name: "IDNO", type: String },
            { name: "HeatNo", type: String },
            { name: "Part_No_l2_Drg_BOQ", type: String },
            { name: "Module_ID_l2_Module", type: String },
            { name: "Drg_ID_5", type: String }
        ]),

        sps_View_Get_Joint_Details_For_NDEBuffer: $defineEntity(sps_View_Get_Joint_Details_For_NDEBuffer, [
            { name: "DrgNo", type: String },
            { name: "Joint_ID", type: String },
            { name: "Module_ID", type: String },
            { name: "Joint_No", type: String },
            { name: "WVF_No", type: String },
            { name: "Insp_Date", type: Date },
            { name: "flg_RT", type: String },
            { name: "flg_UT", type: String },
            { name: "flg_MT", type: String },
            { name: "flg_PT", type: String },
            { name: "flg_PA_UT", type: String },
            { name: "flg_TOFD_UT", type: String },
            { name: "RT_Per", type: String },
            { name: "UT_Per", type: String },
            { name: "MT_Per", type: String },
            { name: "PT_Per", type: String },
            { name: "PA_UT_Per", type: String },
            { name: "TOFD_UT_Per", type: String },
            { name: "Status_RT", type: String },
            { name: "Status_UT", type: String },
            { name: "Status_MT", type: String },
            { name: "Status_PT", type: String },
            { name: "Status_PA_UT", type: String },
            { name: "Status_TOFD_UT", type: String },
            { name: "DefLength", type: String },
            { name: "Desg", type: String },
            { name: "Stage", type: String },
            { name: "ReqFor", type: String }
        ]),

        sps_View_Get_Joint_No_For_WVF: $defineEntity(sps_View_Get_Joint_No_For_WVF, [
            { name: "Project_ID", type: String },
            { name: "Module_ID", type: String },
            { name: "Drg_ID", type: String },
            { name: "Joint_No", type: String },
            { name: "Joint_Config", type: String },
            { name: "LenSize", type: String },
            { name: "Length1", type: String },
            { name: "Thickness1", type: String },
            { name: "Material", type: String },
            { name: "Weld_Process", type: String },
            { name: "WPS", type: String },
            { name: "FTUStatus", type: String },
            { name: "WVFStatus", type: String },
            { name: "Status_WVF", type: Number },
            { name: "Status_RT", type: String },
            { name: "Status_UT", type: String },
            { name: "Status_MT", type: String },
            { name: "Status_PT", type: String },
            { name: "Status_PA_UT", type: String },
            { name: "Status_TOFD_UT", type: String },
            { name: "Joint_Category", type: String },
            { name: "Desg", type: String }
        ]),

        sps_View_Get_JointDetail_for_FitupOffer: $defineEntity(sps_View_Get_JointDetail_for_FitupOffer, [
            { name: "Drg_ID_1", type: String },
            { name: "Drg_ID_2", type: String },
            { name: "Drg_ID_3", type: String },
            { name: "Drg_ID_4", type: String },
            { name: "Drg_ID_5", type: String },
            { name: "Joint_ID", type: String },
            { name: "Joint_No", type: String },
            { name: "Part1", type: String },
            { name: "Part2", type: String },
            { name: "Part3", type: String },
            { name: "Part4", type: String },
            { name: "Part5", type: String },
            { name: "WPS", type: String },
            { name: "Weld_Process", type: String },
            { name: "IMIRNO1", type: String },
            { name: "IMIRNO2", type: String },
            { name: "IMIRNO3", type: String },
            { name: "IMIRNO4", type: String },
            { name: "IMIRNO5", type: String },
            { name: "HeatNo1", type: String },
            { name: "HeatNo2", type: String },
            { name: "HeatNo3", type: String },
            { name: "HeatNo4", type: String },
            { name: "HeatNo5", type: String },
            { name: "IDNo1", type: String },
            { name: "IDNo2", type: String },
            { name: "IDNo3", type: String },
            { name: "IDNo4", type: String },
            { name: "IDNo5", type: String },
            { name: "Material1", type: String },
            { name: "Material2", type: String },
            { name: "Material3", type: String },
            { name: "Material4", type: String },
            { name: "Material5", type: String },
            { name: "LenSize", type: String },
            { name: "Material", type: String },
            { name: "Joint_Category", type: String },
            { name: "flg_Critical_Joint", type: Boolean }
        ]),

        sps_View_Get_JointNo_For_FitUpOffer: $defineEntity(sps_View_Get_JointNo_For_FitUpOffer, [
            { name: "Joint_No", type: String },
            { name: "Joint_ID", type: String },
            { name: "Joint_Category", type: String },
            { name: "Length", type: String },
            { name: "Thickness", type: String },
            { name: "Material1", type: String },
            { name: "Material2", type: String },
            { name: "Material3", type: String },
            { name: "Material4", type: String },
            { name: "Material5", type: String },
            { name: "WPS", type: String },
            { name: "Weld_Process", type: String },
            { name: "Part1", type: String },
            { name: "Part2", type: String },
            { name: "Part3", type: String },
            { name: "Part4", type: String },
            { name: "Part5", type: String },
            { name: "Drg_ID_1", type: String },
            { name: "Drg_ID_2", type: String },
            { name: "Drg_ID_3", type: String },
            { name: "Drg_ID_4", type: String },
            { name: "Drg_ID_5", type: String },
            { name: "IMIRNO1", type: String },
            { name: "IMIRNO2", type: String },
            { name: "IMIRNO3", type: String },
            { name: "IMIRNO4", type: String },
            { name: "IMIRNO5", type: String },
            { name: "HeatNo1", type: String },
            { name: "HeatNo2", type: String },
            { name: "HeatNo3", type: String },
            { name: "HeatNo4", type: String },
            { name: "HeatNo5", type: String },
            { name: "IDNo1", type: String },
            { name: "IDNo2", type: String },
            { name: "IDNo3", type: String },
            { name: "IDNo4", type: String },
            { name: "IDNo5", type: String },
            { name: "Part1Thk", type: String },
            { name: "Part2Thk", type: String },
            { name: "Part3Thk", type: String },
            { name: "Part4Thk", type: String },
            { name: "Part5Thk", type: String },
            { name: "Part1Len", type: String },
            { name: "Part2Len", type: String },
            { name: "Part3Len", type: String },
            { name: "Part4Len", type: String },
            { name: "Part5Len", type: String }
        ]),

        sps_View_Get_MPINo_For_FitupOffer: $defineEntity(sps_View_Get_MPINo_For_FitupOffer, [
            { name: "MPI_No_l2_MPI", type: String },
            { name: "DrgIDFromDrawing", type: String },
            { name: "Drg_ID", type: String },
            { name: "Module_ID_l2_Module", type: String },
            { name: "Part_No_l2_Drg_BOQ", type: String },
            { name: "joint_no", type: String }
        ]),

        sps_View_Get_NDE_Buff_Det_for_Create: $defineEntity(sps_View_Get_NDE_Buff_Det_for_Create, [
            { name: "DrgNo", type: String },
            { name: "Joint_ID", type: String },
            { name: "Module_ID", type: String },
            { name: "Joint_No", type: String },
            { name: "WVF_No", type: String },
            { name: "Insp_Date", type: Date },
            { name: "flg_RT", type: String },
            { name: "flg_UT", type: String },
            { name: "flg_MT", type: String },
            { name: "flg_PT", type: String },
            { name: "flg_PA_UT", type: String },
            { name: "flg_TOFD_UT", type: String },
            { name: "RT_Per", type: String },
            { name: "UT_Per", type: String },
            { name: "MT_Per", type: String },
            { name: "PT_Per", type: String },
            { name: "PA_UT_Per", type: String },
            { name: "TOFD_UT_Per", type: String },
            { name: "Status_RT", type: String },
            { name: "Status_UT", type: String },
            { name: "Status_MT", type: String },
            { name: "Status_PT", type: String },
            { name: "Status_PA_UT", type: String },
            { name: "Status_TOFD_UT", type: String }
        ]),

        sps_View_Get_Part_No_for_MI_Offer: $defineEntity(sps_View_Get_Part_No_for_MI_Offer, [
            { name: "Part_No", type: String },
            { name: "Drg_ID_l2_DrgList", type: String },
            { name: "Sapcode", type: String },
            { name: "Mat_Desc", type: String },
            { name: "SizeDesc", type: String },
            { name: "Qty_Req", type: String },
            { name: "RevID", type: String },
            { name: "Rev", type: String },
            { name: "Sheet_No", type: String },
            { name: "Total_Sheets", type: String },
            { name: "Module_ID", type: String },
            { name: "Project_ID_l2_Project", type: String },
            { name: "Acc_Qty", type: String },
            { name: "Accepted", type: String },
            { name: "Length", type: String },
            { name: "Thk", type: String },
            { name: "Width", type: String }
        ]),

        sps_View_Get_Welder_For_WVF: $defineEntity(sps_View_Get_Welder_For_WVF, [
            { name: "Welder", type: String },
            { name: "Project_ID_l2_Project", type: String }
        ]),

        sps_View_Get_WVF_For_Delete: $defineEntity(sps_View_Get_WVF_For_Delete, [
            { name: "Module_Name", type: String },
            { name: "Location", type: String },
            { name: "Offer_By", type: String },
            { name: "WVF_Date", type: Date },
            { name: "WVF_No", type: String },
            { name: "DrgNo", type: String },
            { name: "Joint_ID", type: String },
            { name: "Joint_No", type: String },
            { name: "WPS_l2_WPS", type: String },
            { name: "Weld_Process", type: String },
            { name: "Welder1", type: String },
            { name: "Welder2", type: String },
            { name: "Welder3", type: String },
            { name: "Welder4", type: String },
            { name: "Welder5", type: String },
            { name: "Welder6", type: String },
            { name: "Welder7", type: String },
            { name: "Welder8", type: String },
            { name: "Welder9", type: String },
            { name: "Welder10", type: String },
            { name: "Remark_Det", type: String },
            { name: "QC_Remark", type: String },
            { name: "EXEC_Remark", type: String },
            { name: "WVFStatus", type: String },
            { name: "RTStatus", type: String },
            { name: "UTStatus", type: String },
            { name: "MTStatus", type: String },
            { name: "PTStatus", type: String }
        ]),

        sps_View_Get_WVFListForDelete: $defineEntity(sps_View_Get_WVFListForDelete, [
            { name: "WVF_No", type: String },
            { name: "WVF_Date", type: Date },
            { name: "c_Module", type: String },
            { name: "Offer_By", type: String }
        ]),

        sps_view_getDrgNo_for_ndeOffer: $defineEntity(sps_view_getDrgNo_for_ndeOffer, [
            { name: "Drg_ID", type: String },
            { name: "Module_ID_l2_Module", type: String }
        ]),

        sps_WVFDetail: $defineEntity(sps_WVFDetail, [
            { name: "WVF_No_l2_WVF", type: String },
            { name: "FTU_No_l2_FTU", type: String },
            { name: "Joint_ID_l2_Joints", type: String },
            { name: "Drg_ID_l2_DrgList", type: String },
            { name: "RevID", type: String },
            { name: "DCN_No", type: String },
            { name: "WPS_l2_WPS", type: String },
            { name: "Weld_Process", type: String },
            { name: "Welder1", type: String },
            { name: "Welder2", type: String },
            { name: "Welder3", type: String },
            { name: "Welder4", type: String },
            { name: "Welder5", type: String },
            { name: "Welder6", type: String },
            { name: "Welder7", type: String },
            { name: "Welder8", type: String },
            { name: "Welder9", type: String },
            { name: "Welder10", type: String },
            { name: "Deleted_By", type: String },
            { name: "Deleted_Date", type: Date },
            { name: "Remark_Det", type: String },
            { name: "Desg", type: String },
            { name: "Status", type: Number },
            { name: "QC_Remark_Det", type: String },
            { name: "ReasonForDelete", type: String },
            { name: "WPS_WeldProc_Edited_by", type: String },
            { name: "WPS_WeldProc_Edited_Date", type: Date },
            { name: "Joint_Config", type: String },
            { name: "ReasonForRejection", type: String },
            { name: "ReasonForRejectionDesc", type: String },
            { name: "Length", type: String },
            { name: "Thickness", type: String },
            { name: "sps_WVF", kind: "reference", type: sps_WVF }
        ]),

        sps_WVF: $defineEntity(sps_WVF, [
            { name: "WVF_No", type: String },
            { name: "WVF_Date", type: Date },
            { name: "Location", type: String },
            { name: "Offer_By", type: String },
            { name: "Insp_By", type: String },
            { name: "Insp_Date", type: Date },
            { name: "Status", type: Number },
            { name: "Edited_By", type: String },
            { name: "Edited_Date", type: Date },
            { name: "EXEC_Remark", type: String },
            { name: "QC_Remark", type: String },
            { name: "Insp_PlanDate", type: Date },
            { name: "sps_Contractor_Module", kind: "reference", type: sps_Contractor_Module },
            { name: "sps_WVFDetails", kind: "collection", elementType: sps_WVFDetail }
        ]),

        SPS_LSData: $defineDataService(SPS_LSData, lightSwitchApplication.rootUri + "/SPS_LSData.svc", [
            { name: "FITUP_ACCEPT_MAINs", elementType: FITUP_ACCEPT_MAIN },
            { name: "GET_CONTRACTORs", elementType: GET_CONTRACTOR },
            { name: "Get_FTU_For_inspect_closeds", elementType: Get_FTU_For_inspect_closed },
            { name: "GET_INSPECT_For_WVFs", elementType: GET_INSPECT_For_WVF },
            { name: "GET_INSPECT_MPI_AFTERaccepts", elementType: GET_INSPECT_MPI_AFTERaccept },
            { name: "GET_MPI_INSPECTs", elementType: GET_MPI_INSPECT },
            { name: "GET_PWHT_INSPECT_ACCEPTs", elementType: GET_PWHT_INSPECT_ACCEPT },
            { name: "GET_PWHT_JOINT_ACCEPTs", elementType: GET_PWHT_JOINT_ACCEPT },
            { name: "GET_QC_INSPECT_MPIs", elementType: GET_QC_INSPECT_MPI },
            { name: "Hardness_offer_gets", elementType: Hardness_offer_get },
            { name: "Inspect_WVF_Details", elementType: Inspect_WVF_Detail },
            { name: "sps_Contractor_Modules", elementType: sps_Contractor_Module },
            { name: "sps_Contractors", elementType: sps_Contractor },
            { name: "sps_DrgLists", elementType: sps_DrgList },
            { name: "sps_FTUDetails", elementType: sps_FTUDetail },
            { name: "sps_FTUs", elementType: sps_FTU },
            { name: "sps_HardnessDetails", elementType: sps_HardnessDetail },
            { name: "sps_Hardnesses", elementType: sps_Hardness },
            { name: "sps_Locations", elementType: sps_Location },
            { name: "sps_Master_Proceduers", elementType: sps_Master_Proceduer },
            { name: "sps_Matser_CodeOfConstructions", elementType: sps_Matser_CodeOfConstruction },
            { name: "sps_MCR_Details", elementType: sps_MCR_Detail },
            { name: "sps_MCRs", elementType: sps_MCR },
            { name: "sps_Modules", elementType: sps_Module },
            { name: "sps_MPI_Detail_Insps", elementType: sps_MPI_Detail_Insp },
            { name: "sps_MPI_Detail_Offs", elementType: sps_MPI_Detail_Off },
            { name: "sps_MPIs", elementType: sps_MPI },
            { name: "sps_NDEReqDets", elementType: sps_NDEReqDet },
            { name: "sps_NDEReqs", elementType: sps_NDEReq },
            { name: "sps_Project_Drgs", elementType: sps_Project_Drg },
            { name: "sps_Projects", elementType: sps_Project },
            { name: "sps_PWHTDetails", elementType: sps_PWHTDetail },
            { name: "sps_PWHTs", elementType: sps_PWHT },
            { name: "sps_RR_WVFDetails", elementType: sps_RR_WVFDetail },
            { name: "sps_RR_WVFs", elementType: sps_RR_WVF },
            { name: "sps_User_Projects", elementType: sps_User_Project },
            { name: "sps_View_Get_Drg_No_For_NDEs", elementType: sps_View_Get_Drg_No_For_NDE },
            { name: "sps_View_Get_Drg_No_For_PWHTs", elementType: sps_View_Get_Drg_No_For_PWHT },
            { name: "sps_View_Get_Drg_No_For_WVFs", elementType: sps_View_Get_Drg_No_For_WVF },
            { name: "sps_View_Get_DrgNo_For_FitUpOffers", elementType: sps_View_Get_DrgNo_For_FitUpOffer },
            { name: "sps_View_get_DrgNOMFF_For_FitupOffers", elementType: sps_View_get_DrgNOMFF_For_FitupOffer },
            { name: "sps_View_Get_FTUDetail_For_Offers", elementType: sps_View_Get_FTUDetail_For_Offer },
            { name: "sps_View_Get_HeatNo_From_IMIRIDs", elementType: sps_View_Get_HeatNo_From_IMIRID },
            { name: "sps_View_Get_IDNO_From_IMIRIDs", elementType: sps_View_Get_IDNO_From_IMIRID },
            { name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1", elementType: sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item },
            { name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2", elementType: sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item },
            { name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3", elementType: sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item },
            { name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4", elementType: sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item },
            { name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5", elementType: sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item },
            { name: "sps_View_Get_Joint_Details_For_NDEBuffers", elementType: sps_View_Get_Joint_Details_For_NDEBuffer },
            { name: "sps_View_Get_Joint_No_For_WVFs", elementType: sps_View_Get_Joint_No_For_WVF },
            { name: "sps_View_Get_JointDetail_for_FitupOffers", elementType: sps_View_Get_JointDetail_for_FitupOffer },
            { name: "sps_View_Get_JointNo_For_FitUpOffers", elementType: sps_View_Get_JointNo_For_FitUpOffer },
            { name: "sps_View_Get_MPINo_For_FitupOffers", elementType: sps_View_Get_MPINo_For_FitupOffer },
            { name: "sps_View_Get_NDE_Buff_Det_for_Creates", elementType: sps_View_Get_NDE_Buff_Det_for_Create },
            { name: "sps_View_Get_Part_No_for_MI_Offers", elementType: sps_View_Get_Part_No_for_MI_Offer },
            { name: "sps_View_Get_Welder_For_WVFs", elementType: sps_View_Get_Welder_For_WVF },
            { name: "sps_View_Get_WVF_For_Deletes", elementType: sps_View_Get_WVF_For_Delete },
            { name: "sps_View_Get_WVFListForDeletes", elementType: sps_View_Get_WVFListForDelete },
            { name: "sps_view_getDrgNo_for_ndeOffers", elementType: sps_view_getDrgNo_for_ndeOffer },
            { name: "sps_WVFDetails", elementType: sps_WVFDetail },
            { name: "sps_WVFs", elementType: sps_WVF }
        ], [
            {
                name: "FITUP_ACCEPT_MAINs_SingleOrDefault", value: function (FTU_No, Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.FITUP_ACCEPT_MAINs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/FITUP_ACCEPT_MAINs(" + "FTU_No=" + $toODataString(FTU_No, "String?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + ")"
                    );
                }
            },
            {
                name: "Display_Inspect_FITUP", value: function (Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.FITUP_ACCEPT_MAINs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Display_Inspect_FITUP()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?")
                        });
                }
            },
            {
                name: "GET_CONTRACTORs_SingleOrDefault", value: function (Contractor_ID, Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.GET_CONTRACTORs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/GET_CONTRACTORs(" + "Contractor_ID=" + $toODataString(Contractor_ID, "Decimal?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + ")"
                    );
                }
            },
            {
                name: "ContractorModuleQuery", value: function (Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.GET_CONTRACTORs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/ContractorModuleQuery()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?")
                        });
                }
            },
            {
                name: "Get_FTU_For_inspect_closeds_SingleOrDefault", value: function (Module_ID, Joint_ID, Joint_No, FTU_No) {
                    return new $DataServiceQuery({ _entitySet: this.Get_FTU_For_inspect_closeds },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Get_FTU_For_inspect_closeds(" + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Joint_ID=" + $toODataString(Joint_ID, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "FTU_No=" + $toODataString(FTU_No, "String?") + ")"
                    );
                }
            },
            {
                name: "displayFITUP_QUERY", value: function (FTU_No) {
                    return new $DataServiceQuery({ _entitySet: this.Get_FTU_For_inspect_closeds },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/displayFITUP_QUERY()",
                        {
                            FTU_No: $toODataString(FTU_No, "String?")
                        });
                }
            },
            {
                name: "Inspect_ftu_query", value: function (Joint_ID, Joint_No) {
                    return new $DataServiceQuery({ _entitySet: this.Get_FTU_For_inspect_closeds },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Inspect_ftu_query()",
                        {
                            Joint_ID: $toODataString(Joint_ID, "String?"),
                            Joint_No: $toODataString(Joint_No, "String?")
                        });
                }
            },
            {
                name: "GET_INSPECT_For_WVFs_SingleOrDefault", value: function (WVF_No, Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.GET_INSPECT_For_WVFs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/GET_INSPECT_For_WVFs(" + "WVF_No=" + $toODataString(WVF_No, "String?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + ")"
                    );
                }
            },
            {
                name: "Inspect_WVF_Query", value: function (Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.GET_INSPECT_For_WVFs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Inspect_WVF_Query()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?")
                        });
                }
            },
            {
                name: "GET_INSPECT_MPI_AFTERaccepts_SingleOrDefault", value: function (MPI_No) {
                    return new $DataServiceQuery({ _entitySet: this.GET_INSPECT_MPI_AFTERaccepts },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/GET_INSPECT_MPI_AFTERaccepts(" + "MPI_No=" + $toODataString(MPI_No, "String?") + ")"
                    );
                }
            },
            {
                name: "InspectMPIQuery", value: function (MPI_No) {
                    return new $DataServiceQuery({ _entitySet: this.GET_INSPECT_MPI_AFTERaccepts },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/InspectMPIQuery()",
                        {
                            MPI_No: $toODataString(MPI_No, "String?")
                        });
                }
            },
            {
                name: "GET_MPI_INSPECTs_SingleOrDefault", value: function (MPI_No) {
                    return new $DataServiceQuery({ _entitySet: this.GET_MPI_INSPECTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/GET_MPI_INSPECTs(" + "MPI_No=" + $toODataString(MPI_No, "String?") + ")"
                    );
                }
            },
            {
                name: "Display_Inspect_MPI", value: function (Module_ID_l2_Module, MPI_No) {
                    return new $DataServiceQuery({ _entitySet: this.GET_MPI_INSPECTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Display_Inspect_MPI()",
                        {
                            Module_ID_l2_Module: $toODataString(Module_ID_l2_Module, "String?"),
                            MPI_No: $toODataString(MPI_No, "String?")
                        });
                }
            },
            {
                name: "Inspect_MIquery", value: function (Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.GET_MPI_INSPECTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Inspect_MIquery()",
                        {
                            Module_ID_l2_Module: $toODataString(Module_ID_l2_Module, "String?")
                        });
                }
            },
            {
                name: "GET_PWHT_INSPECT_ACCEPTs_SingleOrDefault", value: function (PWHT_No, DrgNo, Joint_ID, Joint_No, Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.GET_PWHT_INSPECT_ACCEPTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/GET_PWHT_INSPECT_ACCEPTs(" + "PWHT_No=" + $toODataString(PWHT_No, "String?") + "," + "DrgNo=" + $toODataString(DrgNo, "String?") + "," + "Joint_ID=" + $toODataString(Joint_ID, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + ")"
                    );
                }
            },
            {
                name: "Display_Inspect_PWHT", value: function (Module_ID, PWHT_No) {
                    return new $DataServiceQuery({ _entitySet: this.GET_PWHT_INSPECT_ACCEPTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Display_Inspect_PWHT()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?"),
                            PWHT_No: $toODataString(PWHT_No, "String?")
                        });
                }
            },
            {
                name: "GET_PWHT_INSPECTQUery", value: function (Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.GET_PWHT_INSPECT_ACCEPTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/GET_PWHT_INSPECTQUery()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?")
                        });
                }
            },
            {
                name: "GET_PWHT_JOINT_ACCEPTs_SingleOrDefault", value: function (PWHT_No, Module_ID, Drg_ID, Joint_No, Joint_ID) {
                    return new $DataServiceQuery({ _entitySet: this.GET_PWHT_JOINT_ACCEPTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/GET_PWHT_JOINT_ACCEPTs(" + "PWHT_No=" + $toODataString(PWHT_No, "String?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Drg_ID=" + $toODataString(Drg_ID, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "Joint_ID=" + $toODataString(Joint_ID, "String?") + ")"
                    );
                }
            },
            {
                name: "INSPECT_PWHT_detail_query", value: function (PWHT_No) {
                    return new $DataServiceQuery({ _entitySet: this.GET_PWHT_JOINT_ACCEPTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/INSPECT_PWHT_detail_query()",
                        {
                            PWHT_No: $toODataString(PWHT_No, "String?")
                        });
                }
            },
            {
                name: "Inspect_PWHT_query", value: function (Joint_ID, Joint_No) {
                    return new $DataServiceQuery({ _entitySet: this.GET_PWHT_JOINT_ACCEPTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Inspect_PWHT_query()",
                        {
                            Joint_ID: $toODataString(Joint_ID, "String?"),
                            Joint_No: $toODataString(Joint_No, "String?")
                        });
                }
            },
            {
                name: "GET_QC_INSPECT_MPIs_SingleOrDefault", value: function (Module_ID, Contractor_ID, Sr_No, Drg_ID_l2_DrgList, PARTNO, Qty_Req, Acc_Qty, Stock, MPI_No) {
                    return new $DataServiceQuery({ _entitySet: this.GET_QC_INSPECT_MPIs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/GET_QC_INSPECT_MPIs(" + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Contractor_ID=" + $toODataString(Contractor_ID, "Decimal?") + "," + "Sr_No=" + $toODataString(Sr_No, "Decimal?") + "," + "Drg_ID_l2_DrgList=" + $toODataString(Drg_ID_l2_DrgList, "String?") + "," + "PARTNO=" + $toODataString(PARTNO, "String?") + "," + "Qty_Req=" + $toODataString(Qty_Req, "Decimal?") + "," + "Acc_Qty=" + $toODataString(Acc_Qty, "Decimal?") + "," + "Stock=" + $toODataString(Stock, "Decimal?") + "," + "MPI_No=" + $toODataString(MPI_No, "String?") + ")"
                    );
                }
            },
            {
                name: "Display_Inpect_MPI_Query", value: function (PARTNO, MPI_No) {
                    return new $DataServiceQuery({ _entitySet: this.GET_QC_INSPECT_MPIs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Display_Inpect_MPI_Query()",
                        {
                            PARTNO: $toODataString(PARTNO, "String?"),
                            MPI_No: $toODataString(MPI_No, "String?")
                        });
                }
            },
            {
                name: "QC_Inspect_MPT_Query", value: function (MPI_No) {
                    return new $DataServiceQuery({ _entitySet: this.GET_QC_INSPECT_MPIs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/QC_Inspect_MPT_Query()",
                        {
                            MPI_No: $toODataString(MPI_No, "String?")
                        });
                }
            },
            {
                name: "Hardness_offer_gets_SingleOrDefault", value: function (Module_ID, Drg_ID, Drg_ID_l2_DrgList, Joint_ID, Joint_No) {
                    return new $DataServiceQuery({ _entitySet: this.Hardness_offer_gets },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Hardness_offer_gets(" + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Drg_ID=" + $toODataString(Drg_ID, "String?") + "," + "Drg_ID_l2_DrgList=" + $toODataString(Drg_ID_l2_DrgList, "String?") + "," + "Joint_ID=" + $toODataString(Joint_ID, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + ")"
                    );
                }
            },
            {
                name: "hardness_query", value: function (Module_ID, Joint_No) {
                    return new $DataServiceQuery({ _entitySet: this.Hardness_offer_gets },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/hardness_query()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?"),
                            Joint_No: $toODataString(Joint_No, "String?")
                        });
                }
            },
            {
                name: "Inspect_hardness_query", value: function (Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.Hardness_offer_gets },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Inspect_hardness_query()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?")
                        });
                }
            },
            {
                name: "Inspect_WVF_Details_SingleOrDefault", value: function (Project_ID, Module_ID, Joint_ID, Joint_No, FTU_No_l2_FTU, WVF_No, flg_RT, flg_UT, flg_MT, flg_PT, flg_PA_UT, flg_TOFD_UT, NDEPLan, Length1) {
                    return new $DataServiceQuery({ _entitySet: this.Inspect_WVF_Details },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Inspect_WVF_Details(" + "Project_ID=" + $toODataString(Project_ID, "String?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Joint_ID=" + $toODataString(Joint_ID, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "FTU_No_l2_FTU=" + $toODataString(FTU_No_l2_FTU, "String?") + "," + "WVF_No=" + $toODataString(WVF_No, "String?") + "," + "flg_RT=" + $toODataString(flg_RT, "String?") + "," + "flg_UT=" + $toODataString(flg_UT, "String?") + "," + "flg_MT=" + $toODataString(flg_MT, "String?") + "," + "flg_PT=" + $toODataString(flg_PT, "String?") + "," + "flg_PA_UT=" + $toODataString(flg_PA_UT, "String?") + "," + "flg_TOFD_UT=" + $toODataString(flg_TOFD_UT, "String?") + "," + "NDEPLan=" + $toODataString(NDEPLan, "String?") + "," + "Length1=" + $toODataString(Length1, "String?") + ")"
                    );
                }
            },
            {
                name: "INspect_WVF_Detail_Query", value: function (WVF_No) {
                    return new $DataServiceQuery({ _entitySet: this.Inspect_WVF_Details },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/INspect_WVF_Detail_Query()",
                        {
                            WVF_No: $toODataString(WVF_No, "String?")
                        });
                }
            },
            {
                name: "sps_Contractor_Modules_SingleOrDefault", value: function (Contractor_ID_l2_Contractor, Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Contractor_Modules },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_Contractor_Modules(" + "Contractor_ID_l2_Contractor=" + $toODataString(Contractor_ID_l2_Contractor, "Decimal?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + ")"
                    );
                }
            },
            {
                name: "ContractorForSelectedModule", value: function (Module_ID, Project_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Contractor_Modules },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/ContractorForSelectedModule()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?"),
                            Project_ID: $toODataString(Project_ID, "String?")
                        });
                }
            },
            {
                name: "sps_Contractors_SingleOrDefault", value: function (Contractor_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Contractors },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_Contractors(" + "Contractor_ID=" + $toODataString(Contractor_ID, "Decimal?") + ")"
                    );
                }
            },
            {
                name: "sps_DrgLists_SingleOrDefault", value: function (Drg_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_DrgLists },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_DrgLists(" + "Drg_ID=" + $toODataString(Drg_ID, "String?") + ")"
                    );
                }
            },
            {
                name: "DrgFromModule", value: function (Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_DrgLists },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/DrgFromModule()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?")
                        });
                }
            },
            {
                name: "sps_FTUDetails_SingleOrDefault", value: function (FTU_No_l2_FTU, Joint_ID_l2_Joints) {
                    return new $DataServiceQuery({ _entitySet: this.sps_FTUDetails },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_FTUDetails(" + "FTU_No_l2_FTU=" + $toODataString(FTU_No_l2_FTU, "String?") + "," + "Joint_ID_l2_Joints=" + $toODataString(Joint_ID_l2_Joints, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_FTUs_SingleOrDefault", value: function (FTU_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_FTUs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_FTUs(" + "FTU_No=" + $toODataString(FTU_No, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_HardnessDetails_SingleOrDefault", value: function (Hardness_No, Joint_ID_l2_Joints) {
                    return new $DataServiceQuery({ _entitySet: this.sps_HardnessDetails },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_HardnessDetails(" + "Hardness_No=" + $toODataString(Hardness_No, "String?") + "," + "Joint_ID_l2_Joints=" + $toODataString(Joint_ID_l2_Joints, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_Hardnesses_SingleOrDefault", value: function (Hardness_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Hardnesses },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_Hardnesses(" + "Hardness_No=" + $toODataString(Hardness_No, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_Locations_SingleOrDefault", value: function (Location) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Locations },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_Locations(" + "Location=" + $toODataString(Location, "String?") + ")"
                    );
                }
            },
            {
                name: "LocationProjectQuery", value: function (Plant) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Locations },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/LocationProjectQuery()",
                        {
                            Plant: $toODataString(Plant, "String?")
                        });
                }
            },
            {
                name: "sps_Master_Proceduers_SingleOrDefault", value: function (Report_Type, ProjectID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Master_Proceduers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_Master_Proceduers(" + "Report_Type=" + $toODataString(Report_Type, "String?") + "," + "ProjectID=" + $toODataString(ProjectID, "String?") + ")"
                    );
                }
            },
            {
                name: "ProcedureQuery", value: function (ProjectID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Master_Proceduers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/ProcedureQuery()",
                        {
                            ProjectID: $toODataString(ProjectID, "String?")
                        });
                }
            },
            {
                name: "sps_Matser_CodeOfConstructions_SingleOrDefault", value: function (Code_Of_Construction) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Matser_CodeOfConstructions },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_Matser_CodeOfConstructions(" + "Code_Of_Construction=" + $toODataString(Code_Of_Construction, "String?") + ")"
                    );
                }
            },
            {
                name: "CodeOfConstructionQuery", value: function (ProjectID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Matser_CodeOfConstructions },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/CodeOfConstructionQuery()",
                        {
                            ProjectID: $toODataString(ProjectID, "String?")
                        });
                }
            },
            {
                name: "sps_MCR_Details_SingleOrDefault", value: function (MCR_No_l2_MCR, Drg_No_L2_Drg, Sr_No, Part_No, MPI_No_l2_MPI) {
                    return new $DataServiceQuery({ _entitySet: this.sps_MCR_Details },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_MCR_Details(" + "MCR_No_l2_MCR=" + $toODataString(MCR_No_l2_MCR, "String?") + "," + "Drg_No_L2_Drg=" + $toODataString(Drg_No_L2_Drg, "String?") + "," + "Sr_No=" + $toODataString(Sr_No, "Decimal?") + "," + "Part_No=" + $toODataString(Part_No, "String?") + "," + "MPI_No_l2_MPI=" + $toODataString(MPI_No_l2_MPI, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_MCRs_SingleOrDefault", value: function (MCR_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_MCRs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_MCRs(" + "MCR_No=" + $toODataString(MCR_No, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_Modules_SingleOrDefault", value: function (Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Modules },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_Modules(" + "Module_ID=" + $toODataString(Module_ID, "String?") + ")"
                    );
                }
            },
            {
                name: "ModuleProjectQuery", value: function (Project_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Modules },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/ModuleProjectQuery()",
                        {
                            Project_ID: $toODataString(Project_ID, "String?")
                        });
                }
            },
            {
                name: "sps_MPI_Detail_Insps_SingleOrDefault", value: function (MPI_No_l2_MPI, Drg_ID_l2_DrgList, Part_No_l2_Drg_BOQ, IMIRNO) {
                    return new $DataServiceQuery({ _entitySet: this.sps_MPI_Detail_Insps },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_MPI_Detail_Insps(" + "MPI_No_l2_MPI=" + $toODataString(MPI_No_l2_MPI, "String?") + "," + "Drg_ID_l2_DrgList=" + $toODataString(Drg_ID_l2_DrgList, "String?") + "," + "Part_No_l2_Drg_BOQ=" + $toODataString(Part_No_l2_Drg_BOQ, "String?") + "," + "IMIRNO=" + $toODataString(IMIRNO, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_MPI_Detail_Offs_SingleOrDefault", value: function (MPI_No_l2_MPI, Sr_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_MPI_Detail_Offs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_MPI_Detail_Offs(" + "MPI_No_l2_MPI=" + $toODataString(MPI_No_l2_MPI, "String?") + "," + "Sr_No=" + $toODataString(Sr_No, "Decimal?") + ")"
                    );
                }
            },
            {
                name: "sps_MPIs_SingleOrDefault", value: function (MPI_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_MPIs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_MPIs(" + "MPI_No=" + $toODataString(MPI_No, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_NDEReqDets_SingleOrDefault", value: function (NDE_Req_No_l2_NDEReq, Joint_ID_l2_Joints) {
                    return new $DataServiceQuery({ _entitySet: this.sps_NDEReqDets },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_NDEReqDets(" + "NDE_Req_No_l2_NDEReq=" + $toODataString(NDE_Req_No_l2_NDEReq, "String?") + "," + "Joint_ID_l2_Joints=" + $toODataString(Joint_ID_l2_Joints, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_NDEReqs_SingleOrDefault", value: function (NDE_Req_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_NDEReqs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_NDEReqs(" + "NDE_Req_No=" + $toODataString(NDE_Req_No, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_Project_Drgs_SingleOrDefault", value: function (Project_ID, Module_ID, Drg_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Project_Drgs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_Project_Drgs(" + "Project_ID=" + $toODataString(Project_ID, "String?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Drg_ID=" + $toODataString(Drg_ID, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_Projects_SingleOrDefault", value: function (Project_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_Projects },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_Projects(" + "Project_ID=" + $toODataString(Project_ID, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_PWHTDetails_SingleOrDefault", value: function (PWHT_No_l2_PWHT, Joint_ID_l2_Joints) {
                    return new $DataServiceQuery({ _entitySet: this.sps_PWHTDetails },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_PWHTDetails(" + "PWHT_No_l2_PWHT=" + $toODataString(PWHT_No_l2_PWHT, "String?") + "," + "Joint_ID_l2_Joints=" + $toODataString(Joint_ID_l2_Joints, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_PWHTs_SingleOrDefault", value: function (PWHT_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_PWHTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_PWHTs(" + "PWHT_No=" + $toODataString(PWHT_No, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_RR_WVFDetails_SingleOrDefault", value: function (RR_WVF_No, Joint_ID_l2_Joints) {
                    return new $DataServiceQuery({ _entitySet: this.sps_RR_WVFDetails },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_RR_WVFDetails(" + "RR_WVF_No=" + $toODataString(RR_WVF_No, "String?") + "," + "Joint_ID_l2_Joints=" + $toODataString(Joint_ID_l2_Joints, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_RR_WVFs_SingleOrDefault", value: function (RR_WVF_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_RR_WVFs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_RR_WVFs(" + "RR_WVF_No=" + $toODataString(RR_WVF_No, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_User_Projects_SingleOrDefault", value: function (UserID_l2_User, Project_ID_Project) {
                    return new $DataServiceQuery({ _entitySet: this.sps_User_Projects },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_User_Projects(" + "UserID_l2_User=" + $toODataString(UserID_l2_User, "String?") + "," + "Project_ID_Project=" + $toODataString(Project_ID_Project, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_View_Get_Drg_No_For_NDEs_SingleOrDefault", value: function (DrgNo, Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Drg_No_For_NDEs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_Drg_No_For_NDEs(" + "DrgNo=" + $toODataString(DrgNo, "String?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + ")"
                    );
                }
            },
            {
                name: "get_drg_query", value: function (Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Drg_No_For_NDEs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/get_drg_query()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_Drg_No_For_PWHTs_SingleOrDefault", value: function (Drg_ID, Project_ID, Module_ID, Drg_ID_l2_DrgList, drg_no, Joint_ID, Joint_No, DSC) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Drg_No_For_PWHTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_Drg_No_For_PWHTs(" + "Drg_ID=" + $toODataString(Drg_ID, "String?") + "," + "Project_ID=" + $toODataString(Project_ID, "String?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Drg_ID_l2_DrgList=" + $toODataString(Drg_ID_l2_DrgList, "String?") + "," + "drg_no=" + $toODataString(drg_no, "String?") + "," + "Joint_ID=" + $toODataString(Joint_ID, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "DSC=" + $toODataString(DSC, "String?") + ")"
                    );
                }
            },
            {
                name: "DrgNoForPWHT", value: function (Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Drg_No_For_PWHTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/DrgNoForPWHT()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?")
                        });
                }
            },
            {
                name: "JointNoForPWHTOffer", value: function (Drg_ID, Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Drg_No_For_PWHTs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/JointNoForPWHTOffer()",
                        {
                            Drg_ID: $toODataString(Drg_ID, "String?"),
                            Module_ID: $toODataString(Module_ID, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_Drg_No_For_WVFs_SingleOrDefault", value: function (Module_ID, Drg_ID, Project_ID, Joint_Category, Desg) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Drg_No_For_WVFs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_Drg_No_For_WVFs(" + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Drg_ID=" + $toODataString(Drg_ID, "String?") + "," + "Project_ID=" + $toODataString(Project_ID, "String?") + "," + "Joint_Category=" + $toODataString(Joint_Category, "String?") + "," + "Desg=" + $toODataString(Desg, "String?") + ")"
                    );
                }
            },
            {
                name: "DrgNoForWVFOffer", value: function (Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Drg_No_For_WVFs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/DrgNoForWVFOffer()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_DrgNo_For_FitUpOffers_SingleOrDefault", value: function (Drg_ID, Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_DrgNo_For_FitUpOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_DrgNo_For_FitUpOffers(" + "Drg_ID=" + $toODataString(Drg_ID, "String?") + "," + "Module_ID_l2_Module=" + $toODataString(Module_ID_l2_Module, "String?") + ")"
                    );
                }
            },
            {
                name: "DisplayDrgNoForFitupOffer", value: function (Drg_ID, Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_DrgNo_For_FitUpOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/DisplayDrgNoForFitupOffer()",
                        {
                            Drg_ID: $toODataString(Drg_ID, "String?"),
                            Module_ID_l2_Module: $toODataString(Module_ID_l2_Module, "String?")
                        });
                }
            },
            {
                name: "DrgNoForFitupOffer", value: function (Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_DrgNo_For_FitUpOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/DrgNoForFitupOffer()",
                        {
                            Module_ID_l2_Module: $toODataString(Module_ID_l2_Module, "String?")
                        });
                }
            },
            {
                name: "sps_View_get_DrgNOMFF_For_FitupOffers_SingleOrDefault", value: function (Drg_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_get_DrgNOMFF_For_FitupOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_get_DrgNOMFF_For_FitupOffers(" + "Drg_ID=" + $toODataString(Drg_ID, "String?") + ")"
                    );
                }
            },
            {
                name: "DrgNoMFFForFitupOffer", value: function (Drg_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_get_DrgNOMFF_For_FitupOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/DrgNoMFFForFitupOffer()",
                        {
                            Drg_ID: $toODataString(Drg_ID, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_FTUDetail_For_Offers_SingleOrDefault", value: function (Module_ID, Drg_ID, Joint_ID, Joint_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_FTUDetail_For_Offers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_FTUDetail_For_Offers(" + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Drg_ID=" + $toODataString(Drg_ID, "String?") + "," + "Joint_ID=" + $toODataString(Joint_ID, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + ")"
                    );
                }
            },
            {
                name: "FTUDetailForFitupOffer", value: function (Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_FTUDetail_For_Offers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/FTUDetailForFitupOffer()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_HeatNo_From_IMIRIDs_SingleOrDefault", value: function (IMIRID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_HeatNo_From_IMIRIDs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_HeatNo_From_IMIRIDs(" + "IMIRID=" + $toODataString(IMIRID, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_View_Get_IDNO_From_IMIRIDs_SingleOrDefault", value: function (IMIRID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_IDNO_From_IMIRIDs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_IDNO_From_IMIRIDs(" + "IMIRID=" + $toODataString(IMIRID, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1_SingleOrDefault", value: function (Drg_id_l2_drglist, Joint_No, Drg_ID, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1 },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1(" + "Drg_id_l2_drglist=" + $toODataString(Drg_id_l2_drglist, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "Drg_ID=" + $toODataString(Drg_ID, "String?") + "," + "Part_No_l2_Drg_BOQ=" + $toODataString(Part_No_l2_Drg_BOQ, "String?") + "," + "Module_ID_l2_Module=" + $toODataString(Module_ID_l2_Module, "String?") + ")"
                    );
                }
            },
            {
                name: "IMIRIDHeatForFitupOffer1", value: function (Drg_ID, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1 },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/IMIRIDHeatForFitupOffer1()",
                        {
                            Drg_ID: $toODataString(Drg_ID, "String?"),
                            Drg_id_l2_drglist: $toODataString(Drg_id_l2_drglist, "String?"),
                            Joint_No: $toODataString(Joint_No, "String?"),
                            Part_No_l2_Drg_BOQ: $toODataString(Part_No_l2_Drg_BOQ, "String?"),
                            Module_ID_l2_Module: $toODataString(Module_ID_l2_Module, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2_SingleOrDefault", value: function (Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2 },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2(" + "Drg_id_l2_drglist=" + $toODataString(Drg_id_l2_drglist, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "Part_No_l2_Drg_BOQ=" + $toODataString(Part_No_l2_Drg_BOQ, "String?") + "," + "Module_ID_l2_Module=" + $toODataString(Module_ID_l2_Module, "String?") + ")"
                    );
                }
            },
            {
                name: "IMIRIDHeatForFitupOffer2", value: function (Drg_ID_2, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2 },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/IMIRIDHeatForFitupOffer2()",
                        {
                            Drg_ID_2: $toODataString(Drg_ID_2, "String?"),
                            Drg_id_l2_drglist: $toODataString(Drg_id_l2_drglist, "String?"),
                            Joint_No: $toODataString(Joint_No, "String?"),
                            Part_No_l2_Drg_BOQ: $toODataString(Part_No_l2_Drg_BOQ, "String?"),
                            Module_ID_l2_Module: $toODataString(Module_ID_l2_Module, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3_SingleOrDefault", value: function (Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3 },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3(" + "Drg_id_l2_drglist=" + $toODataString(Drg_id_l2_drglist, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "Part_No_l2_Drg_BOQ=" + $toODataString(Part_No_l2_Drg_BOQ, "String?") + "," + "Module_ID_l2_Module=" + $toODataString(Module_ID_l2_Module, "String?") + ")"
                    );
                }
            },
            {
                name: "IMIRIDHeatForFitupOffer3", value: function (Drg_ID_3, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module, IMIRNO) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3 },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/IMIRIDHeatForFitupOffer3()",
                        {
                            Drg_ID_3: $toODataString(Drg_ID_3, "String?"),
                            Drg_id_l2_drglist: $toODataString(Drg_id_l2_drglist, "String?"),
                            Joint_No: $toODataString(Joint_No, "String?"),
                            Part_No_l2_Drg_BOQ: $toODataString(Part_No_l2_Drg_BOQ, "String?"),
                            Module_ID_l2_Module: $toODataString(Module_ID_l2_Module, "String?"),
                            IMIRNO: $toODataString(IMIRNO, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4_SingleOrDefault", value: function (Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4 },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4(" + "Drg_id_l2_drglist=" + $toODataString(Drg_id_l2_drglist, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "Part_No_l2_Drg_BOQ=" + $toODataString(Part_No_l2_Drg_BOQ, "String?") + "," + "Module_ID_l2_Module=" + $toODataString(Module_ID_l2_Module, "String?") + ")"
                    );
                }
            },
            {
                name: "IMIRIDHeatForFitupOffer4", value: function (Drg_ID_4, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4 },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/IMIRIDHeatForFitupOffer4()",
                        {
                            Drg_ID_4: $toODataString(Drg_ID_4, "String?"),
                            Drg_id_l2_drglist: $toODataString(Drg_id_l2_drglist, "String?"),
                            Joint_No: $toODataString(Joint_No, "String?"),
                            Part_No_l2_Drg_BOQ: $toODataString(Part_No_l2_Drg_BOQ, "String?"),
                            Module_ID_l2_Module: $toODataString(Module_ID_l2_Module, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5_SingleOrDefault", value: function (Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5 },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5(" + "Drg_id_l2_drglist=" + $toODataString(Drg_id_l2_drglist, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "Part_No_l2_Drg_BOQ=" + $toODataString(Part_No_l2_Drg_BOQ, "String?") + "," + "Module_ID_l2_Module=" + $toODataString(Module_ID_l2_Module, "String?") + ")"
                    );
                }
            },
            {
                name: "IMIRIDHeatForFitupOffer5", value: function (Drg_ID_5, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5 },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/IMIRIDHeatForFitupOffer5()",
                        {
                            Drg_ID_5: $toODataString(Drg_ID_5, "String?"),
                            Drg_id_l2_drglist: $toODataString(Drg_id_l2_drglist, "String?"),
                            Joint_No: $toODataString(Joint_No, "String?"),
                            Part_No_l2_Drg_BOQ: $toODataString(Part_No_l2_Drg_BOQ, "String?"),
                            Module_ID_l2_Module: $toODataString(Module_ID_l2_Module, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_Joint_Details_For_NDEBuffers_SingleOrDefault", value: function (DrgNo, Joint_ID, Module_ID, Joint_No, WVF_No, flg_RT, flg_UT, flg_MT, flg_PT, flg_PA_UT, flg_TOFD_UT) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Joint_Details_For_NDEBuffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_Joint_Details_For_NDEBuffers(" + "DrgNo=" + $toODataString(DrgNo, "String?") + "," + "Joint_ID=" + $toODataString(Joint_ID, "String?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "WVF_No=" + $toODataString(WVF_No, "String?") + "," + "flg_RT=" + $toODataString(flg_RT, "String?") + "," + "flg_UT=" + $toODataString(flg_UT, "String?") + "," + "flg_MT=" + $toODataString(flg_MT, "String?") + "," + "flg_PT=" + $toODataString(flg_PT, "String?") + "," + "flg_PA_UT=" + $toODataString(flg_PA_UT, "String?") + "," + "flg_TOFD_UT=" + $toODataString(flg_TOFD_UT, "String?") + ")"
                    );
                }
            },
            {
                name: "Query2", value: function (WVF_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Joint_Details_For_NDEBuffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Query2()",
                        {
                            WVF_No: $toODataString(WVF_No, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_Joint_No_For_WVFs_SingleOrDefault", value: function (Project_ID, Module_ID, Drg_ID, Joint_No, Length1, Thickness1, Joint_Category, Desg) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Joint_No_For_WVFs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_Joint_No_For_WVFs(" + "Project_ID=" + $toODataString(Project_ID, "String?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Drg_ID=" + $toODataString(Drg_ID, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "Length1=" + $toODataString(Length1, "String?") + "," + "Thickness1=" + $toODataString(Thickness1, "String?") + "," + "Joint_Category=" + $toODataString(Joint_Category, "String?") + "," + "Desg=" + $toODataString(Desg, "String?") + ")"
                    );
                }
            },
            {
                name: "JointNoForWVFOffer", value: function (Drg_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Joint_No_For_WVFs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/JointNoForWVFOffer()",
                        {
                            Drg_ID: $toODataString(Drg_ID, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_JointDetail_for_FitupOffers_SingleOrDefault", value: function (Drg_ID_1, Joint_ID, Joint_No, Joint_Category, flg_Critical_Joint) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_JointDetail_for_FitupOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_JointDetail_for_FitupOffers(" + "Drg_ID_1=" + $toODataString(Drg_ID_1, "String?") + "," + "Joint_ID=" + $toODataString(Joint_ID, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "Joint_Category=" + $toODataString(Joint_Category, "String?") + "," + "flg_Critical_Joint=" + $toODataString(flg_Critical_Joint, "Boolean?") + ")"
                    );
                }
            },
            {
                name: "JointDetailForFitupOffer", value: function (Joint_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_JointDetail_for_FitupOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/JointDetailForFitupOffer()",
                        {
                            Joint_ID: $toODataString(Joint_ID, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_JointNo_For_FitUpOffers_SingleOrDefault", value: function (Joint_No, Joint_ID, Drg_ID_1) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_JointNo_For_FitUpOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_JointNo_For_FitUpOffers(" + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "Joint_ID=" + $toODataString(Joint_ID, "String?") + "," + "Drg_ID_1=" + $toODataString(Drg_ID_1, "String?") + ")"
                    );
                }
            },
            {
                name: "DisplayJointNoForFitupOffer", value: function (Drg_ID_l2_DrgList, Joint_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_JointNo_For_FitUpOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/DisplayJointNoForFitupOffer()",
                        {
                            Drg_ID_l2_DrgList: $toODataString(Drg_ID_l2_DrgList, "String?"),
                            Joint_ID: $toODataString(Joint_ID, "String?")
                        });
                }
            },
            {
                name: "JointNoForFitupOffer", value: function (Drg_ID_l2_DrgList) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_JointNo_For_FitUpOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/JointNoForFitupOffer()",
                        {
                            Drg_ID_l2_DrgList: $toODataString(Drg_ID_l2_DrgList, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_MPINo_For_FitupOffers_SingleOrDefault", value: function (MPI_No_l2_MPI, DrgIDFromDrawing, Drg_ID, Module_ID_l2_Module, Part_No_l2_Drg_BOQ, joint_no) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_MPINo_For_FitupOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_MPINo_For_FitupOffers(" + "MPI_No_l2_MPI=" + $toODataString(MPI_No_l2_MPI, "String?") + "," + "DrgIDFromDrawing=" + $toODataString(DrgIDFromDrawing, "String?") + "," + "Drg_ID=" + $toODataString(Drg_ID, "String?") + "," + "Module_ID_l2_Module=" + $toODataString(Module_ID_l2_Module, "String?") + "," + "Part_No_l2_Drg_BOQ=" + $toODataString(Part_No_l2_Drg_BOQ, "String?") + "," + "joint_no=" + $toODataString(joint_no, "String?") + ")"
                    );
                }
            },
            {
                name: "MPINoForFitupOffer", value: function (DrgIDFromDrawing, Module_ID_l2_Module, Part_No_l2_Drg_BOQ, joint_no) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_MPINo_For_FitupOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/MPINoForFitupOffer()",
                        {
                            DrgIDFromDrawing: $toODataString(DrgIDFromDrawing, "String?"),
                            Module_ID_l2_Module: $toODataString(Module_ID_l2_Module, "String?"),
                            Part_No_l2_Drg_BOQ: $toODataString(Part_No_l2_Drg_BOQ, "String?"),
                            joint_no: $toODataString(joint_no, "String?")
                        });
                }
            },
            {
                name: "Query1", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_MPINo_For_FitupOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/Query1()",
                        {
                        });
                }
            },
            {
                name: "sps_View_Get_NDE_Buff_Det_for_Creates_SingleOrDefault", value: function (DrgNo, Joint_ID, Module_ID, Joint_No, WVF_No, flg_RT, flg_UT, flg_MT, flg_PT, flg_PA_UT, flg_TOFD_UT) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_NDE_Buff_Det_for_Creates },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_NDE_Buff_Det_for_Creates(" + "DrgNo=" + $toODataString(DrgNo, "String?") + "," + "Joint_ID=" + $toODataString(Joint_ID, "String?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + "," + "WVF_No=" + $toODataString(WVF_No, "String?") + "," + "flg_RT=" + $toODataString(flg_RT, "String?") + "," + "flg_UT=" + $toODataString(flg_UT, "String?") + "," + "flg_MT=" + $toODataString(flg_MT, "String?") + "," + "flg_PT=" + $toODataString(flg_PT, "String?") + "," + "flg_PA_UT=" + $toODataString(flg_PA_UT, "String?") + "," + "flg_TOFD_UT=" + $toODataString(flg_TOFD_UT, "String?") + ")"
                    );
                }
            },
            {
                name: "FILTERjointQUERY", value: function (WVF_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_NDE_Buff_Det_for_Creates },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/FILTERjointQUERY()",
                        {
                            WVF_No: $toODataString(WVF_No, "String?")
                        });
                }
            },
            {
                name: "jointQuery", value: function (DrgNo) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_NDE_Buff_Det_for_Creates },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/jointQuery()",
                        {
                            DrgNo: $toODataString(DrgNo, "String?")
                        });
                }
            },
            {
                name: "NDE_query", value: function (Module_ID) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_NDE_Buff_Det_for_Creates },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/NDE_query()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_Part_No_for_MI_Offers_SingleOrDefault", value: function (Part_No, Drg_ID_l2_DrgList, Module_ID, Project_ID_l2_Project) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Part_No_for_MI_Offers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_Part_No_for_MI_Offers(" + "Part_No=" + $toODataString(Part_No, "String?") + "," + "Drg_ID_l2_DrgList=" + $toODataString(Drg_ID_l2_DrgList, "String?") + "," + "Module_ID=" + $toODataString(Module_ID, "String?") + "," + "Project_ID_l2_Project=" + $toODataString(Project_ID_l2_Project, "String?") + ")"
                    );
                }
            },
            {
                name: "DisplayPartNoForMIOfferNew", value: function (Module_ID, Project_ID_l2_Project, Drg_ID_l2_DrgList, Part_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Part_No_for_MI_Offers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/DisplayPartNoForMIOfferNew()",
                        {
                            Module_ID: $toODataString(Module_ID, "String?"),
                            Project_ID_l2_Project: $toODataString(Project_ID_l2_Project, "String?"),
                            Drg_ID_l2_DrgList: $toODataString(Drg_ID_l2_DrgList, "String?"),
                            Part_No: $toODataString(Part_No, "String?")
                        });
                }
            },
            {
                name: "PartNoFromDrgIDForMIOffer", value: function (Drg_ID_l2_DrgList) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Part_No_for_MI_Offers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/PartNoFromDrgIDForMIOffer()",
                        {
                            Drg_ID_l2_DrgList: $toODataString(Drg_ID_l2_DrgList, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_Welder_For_WVFs_SingleOrDefault", value: function (Welder, Project_ID_l2_Project) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Welder_For_WVFs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_Welder_For_WVFs(" + "Welder=" + $toODataString(Welder, "String?") + "," + "Project_ID_l2_Project=" + $toODataString(Project_ID_l2_Project, "String?") + ")"
                    );
                }
            },
            {
                name: "WelderForWVFOffer", value: function (Project_ID_l2_Project) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_Welder_For_WVFs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/WelderForWVFOffer()",
                        {
                            Project_ID_l2_Project: $toODataString(Project_ID_l2_Project, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_WVF_For_Deletes_SingleOrDefault", value: function (WVF_No, Joint_ID, Joint_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_WVF_For_Deletes },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_WVF_For_Deletes(" + "WVF_No=" + $toODataString(WVF_No, "String?") + "," + "Joint_ID=" + $toODataString(Joint_ID, "String?") + "," + "Joint_No=" + $toODataString(Joint_No, "String?") + ")"
                    );
                }
            },
            {
                name: "WVFForDelete", value: function (WVF_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_WVF_For_Deletes },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/WVFForDelete()",
                        {
                            WVF_No: $toODataString(WVF_No, "String?")
                        });
                }
            },
            {
                name: "sps_View_Get_WVFListForDeletes_SingleOrDefault", value: function (WVF_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_WVFListForDeletes },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_View_Get_WVFListForDeletes(" + "WVF_No=" + $toODataString(WVF_No, "String?") + ")"
                    );
                }
            },
            {
                name: "GetWVFForDelete", value: function (FromDate, ToDate, c_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_View_Get_WVFListForDeletes },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/GetWVFForDelete()",
                        {
                            FromDate: $toODataString(FromDate, "DateTime?"),
                            ToDate: $toODataString(ToDate, "DateTime?"),
                            c_Module: $toODataString(c_Module, "String?")
                        });
                }
            },
            {
                name: "sps_view_getDrgNo_for_ndeOffers_SingleOrDefault", value: function (Drg_ID, Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_view_getDrgNo_for_ndeOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_view_getDrgNo_for_ndeOffers(" + "Drg_ID=" + $toODataString(Drg_ID, "String?") + "," + "Module_ID_l2_Module=" + $toODataString(Module_ID_l2_Module, "String?") + ")"
                    );
                }
            },
            {
                name: "DrgNoForNdeOffer", value: function (Module_ID_l2_Module) {
                    return new $DataServiceQuery({ _entitySet: this.sps_view_getDrgNo_for_ndeOffers },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/DrgNoForNdeOffer()",
                        {
                            Module_ID_l2_Module: $toODataString(Module_ID_l2_Module, "String?")
                        });
                }
            },
            {
                name: "sps_WVFDetails_SingleOrDefault", value: function (WVF_No_l2_WVF, Joint_ID_l2_Joints) {
                    return new $DataServiceQuery({ _entitySet: this.sps_WVFDetails },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_WVFDetails(" + "WVF_No_l2_WVF=" + $toODataString(WVF_No_l2_WVF, "String?") + "," + "Joint_ID_l2_Joints=" + $toODataString(Joint_ID_l2_Joints, "String?") + ")"
                    );
                }
            },
            {
                name: "sps_WVFs_SingleOrDefault", value: function (WVF_No) {
                    return new $DataServiceQuery({ _entitySet: this.sps_WVFs },
                        lightSwitchApplication.rootUri + "/SPS_LSData.svc" + "/sps_WVFs(" + "WVF_No=" + $toODataString(WVF_No, "String?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "SPS_LSData", type: SPS_LSData }
        ])

    });

}(msls.application));
