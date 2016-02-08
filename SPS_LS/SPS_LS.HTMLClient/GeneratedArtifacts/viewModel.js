/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEdit_NDEReq2(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEdit_NDEReq2 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="getNdeBuffCREATE" type="msls.application.sps_View_Get_NDE_Buff_Det_for_Create">
        /// Gets or sets the getNdeBuffCREATE for this screen.
        /// </field>
        /// <field name="ParaWVFno" type="String">
        /// Gets or sets the paraWVFno for this screen.
        /// </field>
        /// <field name="FILTERjointQUERY" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_NDE_Buff_Det_for_Create">
        /// Gets the fILTERjointQUERY for this screen.
        /// </field>
        /// <field name="RTNDEREMARK" type="String">
        /// Gets or sets the rTNDEREMARK for this screen.
        /// </field>
        /// <field name="UTNDEREMARK" type="String">
        /// Gets or sets the uTNDEREMARK for this screen.
        /// </field>
        /// <field name="MTNDEREMARK" type="String">
        /// Gets or sets the mTNDEREMARK for this screen.
        /// </field>
        /// <field name="PTNDEREMARK" type="String">
        /// Gets or sets the pTNDEREMARK for this screen.
        /// </field>
        /// <field name="PaUTremark" type="String">
        /// Gets or sets the paUTremark for this screen.
        /// </field>
        /// <field name="TOFDUTREMARK" type="String">
        /// Gets or sets the tOFDUTREMARK for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEdit_NDEReq2.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEdit_NDEReq2", parameters);
    }

    function AddEditsps_NDEReq1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditsps_NDEReq1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="paraModuleID" type="String">
        /// Gets or sets the paraModuleID for this screen.
        /// </field>
        /// <field name="Get_NDE_Buffer_Det_for_Create" type="msls.application.sps_View_Get_NDE_Buff_Det_for_Create">
        /// Gets or sets the get_NDE_Buffer_Det_for_Create for this screen.
        /// </field>
        /// <field name="NDE_query" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_NDE_Buff_Det_for_Create">
        /// Gets the nDE_query for this screen.
        /// </field>
        /// <field name="jointQuery1" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_NDE_Buff_Det_for_Create">
        /// Gets the jointQuery1 for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditsps_NDEReq1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditsps_NDEReq1", parameters);
    }

    function AddEditsps_WVF1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditsps_WVF1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_WVFDetails" type="msls.VisualCollection" elementType="msls.application.sps_WVFDetail">
        /// Gets the sps_WVFDetails for this screen.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this screen.
        /// </field>
        /// <field name="ToDate" type="Date">
        /// Gets or sets the toDate for this screen.
        /// </field>
        /// <field name="para_ModuleID" type="String">
        /// Gets or sets the para_ModuleID for this screen.
        /// </field>
        /// <field name="sps_WVF" type="msls.application.sps_WVF">
        /// Gets or sets the sps_WVF for this screen.
        /// </field>
        /// <field name="GetWVFForDelete" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_WVFListForDelete">
        /// Gets the getWVFForDelete for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditsps_WVF1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditsps_WVF1", parameters);
    }

    function WVFDelete(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the WVFDelete screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_WVFDetail" type="msls.application.sps_WVFDetail">
        /// Gets or sets the sps_WVFDetail for this screen.
        /// </field>
        /// <field name="WVFForDelete" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_WVF_For_Delete">
        /// Gets the wVFForDelete for this screen.
        /// </field>
        /// <field name="details" type="msls.application.WVFDelete.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "WVFDelete", parameters);
    }

    function AddEdit_Hardness_Report(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEdit_Hardness_Report screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_Hardness" type="msls.application.sps_Hardness">
        /// Gets or sets the sps_Hardness for this screen.
        /// </field>
        /// <field name="Hardness_Offer_get" type="msls.application.Hardness_offer_get">
        /// Gets or sets the hardness_Offer_get for this screen.
        /// </field>
        /// <field name="hardness_query" type="msls.VisualCollection" elementType="msls.application.Hardness_offer_get">
        /// Gets the hardness_query for this screen.
        /// </field>
        /// <field name="Inspect_hardness_query" type="msls.VisualCollection" elementType="msls.application.Hardness_offer_get">
        /// Gets the inspect_hardness_query for this screen.
        /// </field>
        /// <field name="ParaModuleID" type="String">
        /// Gets or sets the paraModuleID for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEdit_Hardness_Report.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEdit_Hardness_Report", parameters);
    }

    function Inspect_FITUP1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Inspect_FITUP1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ParaModuleID" type="String">
        /// Gets or sets the paraModuleID for this screen.
        /// </field>
        /// <field name="FITUP_ACCEPT_MAIN" type="msls.application.FITUP_ACCEPT_MAIN">
        /// Gets or sets the fITUP_ACCEPT_MAIN for this screen.
        /// </field>
        /// <field name="Display_Inspect_FITUP" type="msls.VisualCollection" elementType="msls.application.FITUP_ACCEPT_MAIN">
        /// Gets the display_Inspect_FITUP for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Inspect_FITUP1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Inspect_FITUP1", parameters);
    }

    function Inspect_FITUP2(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Inspect_FITUP2 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ParaModuleID" type="String">
        /// Gets or sets the paraModuleID for this screen.
        /// </field>
        /// <field name="displayFITUP_QUERY" type="msls.VisualCollection" elementType="msls.application.Get_FTU_For_inspect_closed">
        /// Gets the displayFITUP_QUERY for this screen.
        /// </field>
        /// <field name="paraFTUno" type="String">
        /// Gets or sets the paraFTUno for this screen.
        /// </field>
        /// <field name="RemarkQC" type="String">
        /// Gets or sets the remarkQC for this screen.
        /// </field>
        /// <field name="QCREMARK" type="String">
        /// Gets or sets the qCREMARK for this screen.
        /// </field>
        /// <field name="IDOfInstruemntUsed" type="String">
        /// Gets or sets the iDOfInstruemntUsed for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Inspect_FITUP2.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Inspect_FITUP2", parameters);
    }

    function Inspect_MI1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Inspect_MI1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="GET_MPI_INSPECTProperty" type="msls.application.GET_MPI_INSPECT">
        /// Gets or sets the gET_MPI_INSPECTProperty for this screen.
        /// </field>
        /// <field name="ParaModuleID" type="String">
        /// Gets or sets the paraModuleID for this screen.
        /// </field>
        /// <field name="Inspect_MIquery" type="msls.VisualCollection" elementType="msls.application.GET_MPI_INSPECT">
        /// Gets the inspect_MIquery for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Inspect_MI1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Inspect_MI1", parameters);
    }

    function Inspect_MI2(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Inspect_MI2 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="paraMPINo" type="String">
        /// Gets or sets the paraMPINo for this screen.
        /// </field>
        /// <field name="QC_Inspect_MPT_Property" type="msls.application.GET_QC_INSPECT_MPI">
        /// Gets or sets the qC_Inspect_MPT_Property for this screen.
        /// </field>
        /// <field name="QC_Inspect_MPT_Query" type="msls.VisualCollection" elementType="msls.application.GET_QC_INSPECT_MPI">
        /// Gets the qC_Inspect_MPT_Query for this screen.
        /// </field>
        /// <field name="OfferedQTY" type="String">
        /// Gets or sets the offeredQTY for this screen.
        /// </field>
        /// <field name="paraModuleID" type="String">
        /// Gets or sets the paraModuleID for this screen.
        /// </field>
        /// <field name="QCremark" type="String">
        /// Gets or sets the qCremark for this screen.
        /// </field>
        /// <field name="REMARK" type="String">
        /// Gets or sets the rEMARK for this screen.
        /// </field>
        /// <field name="QTYaccepted" type="Boolean">
        /// Gets or sets the qTYaccepted for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Inspect_MI2.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Inspect_MI2", parameters);
    }

    function Inspect_PWHT1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Inspect_PWHT1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="GET_PWHT_INSPECT_ACCEPT" type="msls.application.GET_PWHT_INSPECT_ACCEPT">
        /// Gets or sets the gET_PWHT_INSPECT_ACCEPT for this screen.
        /// </field>
        /// <field name="ParaModuleID" type="String">
        /// Gets or sets the paraModuleID for this screen.
        /// </field>
        /// <field name="GET_PWHT_INSPECTQUery" type="msls.VisualCollection" elementType="msls.application.GET_PWHT_INSPECT_ACCEPT">
        /// Gets the gET_PWHT_INSPECTQUery for this screen.
        /// </field>
        /// <field name="ParaProjectID" type="String">
        /// Gets or sets the paraProjectID for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Inspect_PWHT1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Inspect_PWHT1", parameters);
    }

    function Inspect_PWHT2(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Inspect_PWHT2 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="GET_PWHT_JOINT_ACCEPT" type="msls.application.GET_PWHT_JOINT_ACCEPT">
        /// Gets or sets the gET_PWHT_JOINT_ACCEPT for this screen.
        /// </field>
        /// <field name="INSPECT_PWHT_detail_query" type="msls.VisualCollection" elementType="msls.application.GET_PWHT_JOINT_ACCEPT">
        /// Gets the iNSPECT_PWHT_detail_query for this screen.
        /// </field>
        /// <field name="ParaPWHTno" type="String">
        /// Gets or sets the paraPWHTno for this screen.
        /// </field>
        /// <field name="ParaModuleID" type="String">
        /// Gets or sets the paraModuleID for this screen.
        /// </field>
        /// <field name="NOFTHERMOCOUPLES" type="String">
        /// Gets or sets the nOFTHERMOCOUPLES for this screen.
        /// </field>
        /// <field name="LOADINGTEMPactual" type="String">
        /// Gets or sets the lOADINGTEMPactual for this screen.
        /// </field>
        /// <field name="RATEOFHEATINGactual" type="String">
        /// Gets or sets the rATEOFHEATINGactual for this screen.
        /// </field>
        /// <field name="SOAKINGTEMPactual" type="String">
        /// Gets or sets the sOAKINGTEMPactual for this screen.
        /// </field>
        /// <field name="SOAKINGPERIODactual" type="String">
        /// Gets or sets the sOAKINGPERIODactual for this screen.
        /// </field>
        /// <field name="RATEOFCOOLINGactual" type="String">
        /// Gets or sets the rATEOFCOOLINGactual for this screen.
        /// </field>
        /// <field name="UNLOADINGTEMPactual" type="String">
        /// Gets or sets the uNLOADINGTEMPactual for this screen.
        /// </field>
        /// <field name="QCremark" type="String">
        /// Gets or sets the qCremark for this screen.
        /// </field>
        /// <field name="accept" type="Boolean">
        /// Gets or sets the accept for this screen.
        /// </field>
        /// <field name="ProcedureProperty" type="msls.application.sps_Master_Proceduer">
        /// Gets or sets the procedureProperty for this screen.
        /// </field>
        /// <field name="paraProjectID" type="String">
        /// Gets or sets the paraProjectID for this screen.
        /// </field>
        /// <field name="ProcedureQuery" type="msls.VisualCollection" elementType="msls.application.sps_Master_Proceduer">
        /// Gets the procedureQuery for this screen.
        /// </field>
        /// <field name="CodeOfConstructionQuery" type="msls.VisualCollection" elementType="msls.application.sps_Matser_CodeOfConstruction">
        /// Gets the codeOfConstructionQuery for this screen.
        /// </field>
        /// <field name="CodeOfConstProperty" type="msls.application.sps_Matser_CodeOfConstruction">
        /// Gets or sets the codeOfConstProperty for this screen.
        /// </field>
        /// <field name="LoadingTemp" type="String">
        /// Gets or sets the loadingTemp for this screen.
        /// </field>
        /// <field name="RateOFheating" type="String">
        /// Gets or sets the rateOFheating for this screen.
        /// </field>
        /// <field name="soakingTemp" type="String">
        /// Gets or sets the soakingTemp for this screen.
        /// </field>
        /// <field name="soakingPeriod" type="String">
        /// Gets or sets the soakingPeriod for this screen.
        /// </field>
        /// <field name="RateOFcooling" type="String">
        /// Gets or sets the rateOFcooling for this screen.
        /// </field>
        /// <field name="unloadingTemp" type="String">
        /// Gets or sets the unloadingTemp for this screen.
        /// </field>
        /// <field name="TEMPRECORDSRNOVALIDITY" type="String">
        /// Gets or sets the tEMPRECORDSRNOVALIDITY for this screen.
        /// </field>
        /// <field name="THERMOCOUPLENOVALIDITY" type="String">
        /// Gets or sets the tHERMOCOUPLENOVALIDITY for this screen.
        /// </field>
        /// <field name="CHARTSPEED" type="String">
        /// Gets or sets the cHARTSPEED for this screen.
        /// </field>
        /// <field name="CHARTNO" type="String">
        /// Gets or sets the cHARTNO for this screen.
        /// </field>
        /// <field name="STARTINGTIMEDATE" type="Date">
        /// Gets or sets the sTARTINGTIMEDATE for this screen.
        /// </field>
        /// <field name="ENDINGTIMEDATE" type="Date">
        /// Gets or sets the eNDINGTIMEDATE for this screen.
        /// </field>
        /// <field name="TEMPERATURERECORDERVALIDITY" type="Date">
        /// Gets or sets the tEMPERATURERECORDERVALIDITY for this screen.
        /// </field>
        /// <field name="THERMOCOUPLEVALIDITY" type="Date">
        /// Gets or sets the tHERMOCOUPLEVALIDITY for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Inspect_PWHT2.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Inspect_PWHT2", parameters);
    }

    function Inspect_WVF2(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Inspect_WVF2 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="paraWVFNo" type="String">
        /// Gets or sets the paraWVFNo for this screen.
        /// </field>
        /// <field name="paraModuleID" type="String">
        /// Gets or sets the paraModuleID for this screen.
        /// </field>
        /// <field name="WVF_Detail_Inpsect_Property" type="msls.application.Inspect_WVF_Detail">
        /// Gets or sets the wVF_Detail_Inpsect_Property for this screen.
        /// </field>
        /// <field name="Joint_ID" type="String">
        /// Gets or sets the joint_ID for this screen.
        /// </field>
        /// <field name="Joint_No" type="String">
        /// Gets or sets the joint_No for this screen.
        /// </field>
        /// <field name="Result" type="Boolean">
        /// Gets or sets the result for this screen.
        /// </field>
        /// <field name="RTOffer" type="Boolean">
        /// Gets or sets the rTOffer for this screen.
        /// </field>
        /// <field name="QCWVFremark" type="String">
        /// Gets or sets the qCWVFremark for this screen.
        /// </field>
        /// <field name="RTNDEremark" type="String">
        /// Gets or sets the rTNDEremark for this screen.
        /// </field>
        /// <field name="UTOffer" type="Boolean">
        /// Gets or sets the uTOffer for this screen.
        /// </field>
        /// <field name="UTNDERemark" type="String">
        /// Gets or sets the uTNDERemark for this screen.
        /// </field>
        /// <field name="MTOffer" type="Boolean">
        /// Gets or sets the mTOffer for this screen.
        /// </field>
        /// <field name="PTOffer" type="Boolean">
        /// Gets or sets the pTOffer for this screen.
        /// </field>
        /// <field name="PAUTOffer" type="Boolean">
        /// Gets or sets the pAUTOffer for this screen.
        /// </field>
        /// <field name="TOFDUTOffer" type="Boolean">
        /// Gets or sets the tOFDUTOffer for this screen.
        /// </field>
        /// <field name="MTNDEREMARK" type="String">
        /// Gets or sets the mTNDEREMARK for this screen.
        /// </field>
        /// <field name="PTNDEREMARK" type="String">
        /// Gets or sets the pTNDEREMARK for this screen.
        /// </field>
        /// <field name="PAUTNDEREMARK" type="String">
        /// Gets or sets the pAUTNDEREMARK for this screen.
        /// </field>
        /// <field name="TOFDUTNDEREMARK" type="String">
        /// Gets or sets the tOFDUTNDEREMARK for this screen.
        /// </field>
        /// <field name="INspect_WVF_Detail_Query1" type="msls.VisualCollection" elementType="msls.application.Inspect_WVF_Detail">
        /// Gets the iNspect_WVF_Detail_Query1 for this screen.
        /// </field>
        /// <field name="QCREMARK" type="String">
        /// Gets or sets the qCREMARK for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Inspect_WVF2.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Inspect_WVF2", parameters);
    }

    function WVFInspect1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the WVFInspect1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="paraModuleID" type="String">
        /// Gets or sets the paraModuleID for this screen.
        /// </field>
        /// <field name="Inspect_Wvf_Property" type="msls.application.GET_INSPECT_For_WVF">
        /// Gets or sets the inspect_Wvf_Property for this screen.
        /// </field>
        /// <field name="Inspect_WVF_Query" type="msls.VisualCollection" elementType="msls.application.GET_INSPECT_For_WVF">
        /// Gets the inspect_WVF_Query for this screen.
        /// </field>
        /// <field name="details" type="msls.application.WVFInspect1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "WVFInspect1", parameters);
    }

    function AddEditsps_FTU(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditsps_FTU screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_FTU" type="msls.application.sps_FTU">
        /// Gets or sets the sps_FTU for this screen.
        /// </field>
        /// <field name="sps_FTUDetails" type="msls.VisualCollection" elementType="msls.application.sps_FTUDetail">
        /// Gets the sps_FTUDetails for this screen.
        /// </field>
        /// <field name="para_ProjectID" type="String">
        /// Gets or sets the para_ProjectID for this screen.
        /// </field>
        /// <field name="para_ModuleID" type="String">
        /// Gets or sets the para_ModuleID for this screen.
        /// </field>
        /// <field name="LocationProperty" type="msls.application.sps_Location">
        /// Gets or sets the locationProperty for this screen.
        /// </field>
        /// <field name="para_User_Name" type="String">
        /// Gets or sets the para_User_Name for this screen.
        /// </field>
        /// <field name="para_Plant" type="String">
        /// Gets or sets the para_Plant for this screen.
        /// </field>
        /// <field name="ContractorProperty" type="msls.application.GET_CONTRACTOR">
        /// Gets or sets the contractorProperty for this screen.
        /// </field>
        /// <field name="ContractorModuleQuery" type="msls.VisualCollection" elementType="msls.application.GET_CONTRACTOR">
        /// Gets the contractorModuleQuery for this screen.
        /// </field>
        /// <field name="LocationProjectQuery" type="msls.VisualCollection" elementType="msls.application.sps_Location">
        /// Gets the locationProjectQuery for this screen.
        /// </field>
        /// <field name="para_ProjectName" type="String">
        /// Gets or sets the para_ProjectName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditsps_FTU.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditsps_FTU", parameters);
    }

    function AddEditsps_FTUDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditsps_FTUDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_FTUDetail" type="msls.application.sps_FTUDetail">
        /// Gets or sets the sps_FTUDetail for this screen.
        /// </field>
        /// <field name="para_ModuleID" type="String">
        /// Gets or sets the para_ModuleID for this screen.
        /// </field>
        /// <field name="JointNoProperty" type="msls.application.sps_View_Get_JointNo_For_FitUpOffer">
        /// Gets or sets the jointNoProperty for this screen.
        /// </field>
        /// <field name="JointNoForFitupOffer" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_JointNo_For_FitUpOffer">
        /// Gets the jointNoForFitupOffer for this screen.
        /// </field>
        /// <field name="DisplayJointNoForFitupOffer" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_JointNo_For_FitUpOffer">
        /// Gets the displayJointNoForFitupOffer for this screen.
        /// </field>
        /// <field name="DisplayDrgNoForFitupOffer" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_DrgNo_For_FitUpOffer">
        /// Gets the displayDrgNoForFitupOffer for this screen.
        /// </field>
        /// <field name="DrgNoForFitupOffer" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_DrgNo_For_FitUpOffer">
        /// Gets the drgNoForFitupOffer for this screen.
        /// </field>
        /// <field name="DrgNoProperty" type="msls.application.sps_View_Get_DrgNo_For_FitUpOffer">
        /// Gets or sets the drgNoProperty for this screen.
        /// </field>
        /// <field name="IMIRIDHeat1Property" type="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item">
        /// Gets or sets the iMIRIDHeat1Property for this screen.
        /// </field>
        /// <field name="IMIRIDHeatForFitupOffer1" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item">
        /// Gets the iMIRIDHeatForFitupOffer1 for this screen.
        /// </field>
        /// <field name="IMIRIDHeat2Property" type="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item">
        /// Gets or sets the iMIRIDHeat2Property for this screen.
        /// </field>
        /// <field name="IMIRIDHeatForFitupOffer2" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item">
        /// Gets the iMIRIDHeatForFitupOffer2 for this screen.
        /// </field>
        /// <field name="IMIRIDHeat3Property" type="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item">
        /// Gets or sets the iMIRIDHeat3Property for this screen.
        /// </field>
        /// <field name="IMIRIDHeatForFitupOffer3" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item">
        /// Gets the iMIRIDHeatForFitupOffer3 for this screen.
        /// </field>
        /// <field name="para_ProjectName" type="String">
        /// Gets or sets the para_ProjectName for this screen.
        /// </field>
        /// <field name="IMIRIDHeat4Property" type="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item">
        /// Gets or sets the iMIRIDHeat4Property for this screen.
        /// </field>
        /// <field name="IMIRIDHeatForFitupOffer4" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item">
        /// Gets the iMIRIDHeatForFitupOffer4 for this screen.
        /// </field>
        /// <field name="IMIRIDHeat5Property" type="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item">
        /// Gets or sets the iMIRIDHeat5Property for this screen.
        /// </field>
        /// <field name="IMIRIDHeatForFitupOffer5" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item">
        /// Gets the iMIRIDHeatForFitupOffer5 for this screen.
        /// </field>
        /// <field name="MPINoForFitupOffer" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_MPINo_For_FitupOffer">
        /// Gets the mPINoForFitupOffer for this screen.
        /// </field>
        /// <field name="MPI1" type="msls.application.sps_View_Get_MPINo_For_FitupOffer">
        /// Gets or sets the mPI1 for this screen.
        /// </field>
        /// <field name="MPINoForFitupOffer2" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_MPINo_For_FitupOffer">
        /// Gets the mPINoForFitupOffer2 for this screen.
        /// </field>
        /// <field name="MPINoForFitupOffer3" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_MPINo_For_FitupOffer">
        /// Gets the mPINoForFitupOffer3 for this screen.
        /// </field>
        /// <field name="MPINoForFitupOffer4" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_MPINo_For_FitupOffer">
        /// Gets the mPINoForFitupOffer4 for this screen.
        /// </field>
        /// <field name="MPINoForFitupOffer5" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_MPINo_For_FitupOffer">
        /// Gets the mPINoForFitupOffer5 for this screen.
        /// </field>
        /// <field name="MPI2" type="msls.application.sps_View_Get_MPINo_For_FitupOffer">
        /// Gets or sets the mPI2 for this screen.
        /// </field>
        /// <field name="MPI3" type="msls.application.sps_View_Get_MPINo_For_FitupOffer">
        /// Gets or sets the mPI3 for this screen.
        /// </field>
        /// <field name="MPI4" type="msls.application.sps_View_Get_MPINo_For_FitupOffer">
        /// Gets or sets the mPI4 for this screen.
        /// </field>
        /// <field name="MPI5" type="msls.application.sps_View_Get_MPINo_For_FitupOffer">
        /// Gets or sets the mPI5 for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditsps_FTUDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditsps_FTUDetail", parameters);
    }

    function AddEditsps_MPI(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditsps_MPI screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_MPI" type="msls.application.sps_MPI">
        /// Gets or sets the sps_MPI for this screen.
        /// </field>
        /// <field name="sps_MPI_Detail_Offs" type="msls.VisualCollection" elementType="msls.application.sps_MPI_Detail_Off">
        /// Gets the sps_MPI_Detail_Offs for this screen.
        /// </field>
        /// <field name="DrgProperty" type="msls.application.sps_DrgList">
        /// Gets or sets the drgProperty for this screen.
        /// </field>
        /// <field name="DrgFromModule" type="msls.VisualCollection" elementType="msls.application.sps_DrgList">
        /// Gets the drgFromModule for this screen.
        /// </field>
        /// <field name="para_ModuleID" type="String">
        /// Gets or sets the para_ModuleID for this screen.
        /// </field>
        /// <field name="para_IMIRProjectID" type="String">
        /// Gets or sets the para_IMIRProjectID for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditsps_MPI.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditsps_MPI", parameters);
    }

    function AddEditsps_MPI_Detail_Off(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditsps_MPI_Detail_Off screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_MPI_Detail_Off" type="msls.application.sps_MPI_Detail_Off">
        /// Gets or sets the sps_MPI_Detail_Off for this screen.
        /// </field>
        /// <field name="PartNoProperty" type="msls.application.sps_View_Get_Part_No_for_MI_Offer">
        /// Gets or sets the partNoProperty for this screen.
        /// </field>
        /// <field name="PartNoFromDrgIDForMIOffer" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_Part_No_for_MI_Offer">
        /// Gets the partNoFromDrgIDForMIOffer for this screen.
        /// </field>
        /// <field name="para_DrgID" type="String">
        /// Gets or sets the para_DrgID for this screen.
        /// </field>
        /// <field name="para_ModuleID" type="String">
        /// Gets or sets the para_ModuleID for this screen.
        /// </field>
        /// <field name="para_IMIRProjectID" type="String">
        /// Gets or sets the para_IMIRProjectID for this screen.
        /// </field>
        /// <field name="DisplayPartNoForMIOfferNew" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_Part_No_for_MI_Offer">
        /// Gets the displayPartNoForMIOfferNew for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditsps_MPI_Detail_Off.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditsps_MPI_Detail_Off", parameters);
    }

    function AddEditsps_NDEReq(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditsps_NDEReq screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_NDEReq" type="msls.application.sps_NDEReq">
        /// Gets or sets the sps_NDEReq for this screen.
        /// </field>
        /// <field name="sps_NDEReqDets" type="msls.VisualCollection" elementType="msls.application.sps_NDEReqDet">
        /// Gets the sps_NDEReqDets for this screen.
        /// </field>
        /// <field name="DrgNoProperty" type="msls.application.sps_view_getDrgNo_for_ndeOffer">
        /// Gets or sets the drgNoProperty for this screen.
        /// </field>
        /// <field name="para_ModuleID" type="String">
        /// Gets or sets the para_ModuleID for this screen.
        /// </field>
        /// <field name="DrgNoForNdeOffer" type="msls.VisualCollection" elementType="msls.application.sps_view_getDrgNo_for_ndeOffer">
        /// Gets the drgNoForNdeOffer for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditsps_NDEReq.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditsps_NDEReq", parameters);
    }

    function AddEditsps_PWHT(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditsps_PWHT screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_PWHT" type="msls.application.sps_PWHT">
        /// Gets or sets the sps_PWHT for this screen.
        /// </field>
        /// <field name="sps_PWHTDetails" type="msls.VisualCollection" elementType="msls.application.sps_PWHTDetail">
        /// Gets the sps_PWHTDetails for this screen.
        /// </field>
        /// <field name="para_ModuleID" type="String">
        /// Gets or sets the para_ModuleID for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditsps_PWHT.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditsps_PWHT", parameters);
    }

    function AddEditsps_PWHTDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditsps_PWHTDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_PWHTDetail" type="msls.application.sps_PWHTDetail">
        /// Gets or sets the sps_PWHTDetail for this screen.
        /// </field>
        /// <field name="para_ModuleID" type="String">
        /// Gets or sets the para_ModuleID for this screen.
        /// </field>
        /// <field name="DrgNoProperty" type="msls.application.sps_View_Get_Drg_No_For_PWHT">
        /// Gets or sets the drgNoProperty for this screen.
        /// </field>
        /// <field name="DrgNoForPWHT" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_Drg_No_For_PWHT">
        /// Gets the drgNoForPWHT for this screen.
        /// </field>
        /// <field name="JointNoProperty" type="msls.application.sps_View_Get_Drg_No_For_PWHT">
        /// Gets or sets the jointNoProperty for this screen.
        /// </field>
        /// <field name="JointNoForPWHTOffer" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_Drg_No_For_PWHT">
        /// Gets the jointNoForPWHTOffer for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditsps_PWHTDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditsps_PWHTDetail", parameters);
    }

    function AddEditsps_WVF(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditsps_WVF screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_WVF" type="msls.application.sps_WVF">
        /// Gets or sets the sps_WVF for this screen.
        /// </field>
        /// <field name="sps_WVFDetails" type="msls.VisualCollection" elementType="msls.application.sps_WVFDetail">
        /// Gets the sps_WVFDetails for this screen.
        /// </field>
        /// <field name="para_ModuleID" type="String">
        /// Gets or sets the para_ModuleID for this screen.
        /// </field>
        /// <field name="para_ProjectID" type="String">
        /// Gets or sets the para_ProjectID for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditsps_WVF.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditsps_WVF", parameters);
    }

    function AddEditsps_WVFDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditsps_WVFDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_WVFDetail" type="msls.application.sps_WVFDetail">
        /// Gets or sets the sps_WVFDetail for this screen.
        /// </field>
        /// <field name="DrgNoProperty" type="msls.application.sps_View_Get_Drg_No_For_WVF">
        /// Gets or sets the drgNoProperty for this screen.
        /// </field>
        /// <field name="DrgNoForWVFOffer" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_Drg_No_For_WVF">
        /// Gets the drgNoForWVFOffer for this screen.
        /// </field>
        /// <field name="para_ModuleID" type="String">
        /// Gets or sets the para_ModuleID for this screen.
        /// </field>
        /// <field name="JointNoProperty" type="msls.application.sps_View_Get_Joint_No_For_WVF">
        /// Gets or sets the jointNoProperty for this screen.
        /// </field>
        /// <field name="JointNoForWVFOffer" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_Joint_No_For_WVF">
        /// Gets the jointNoForWVFOffer for this screen.
        /// </field>
        /// <field name="Welder1" type="msls.application.sps_View_Get_Welder_For_WVF">
        /// Gets or sets the welder1 for this screen.
        /// </field>
        /// <field name="para_ProjectID" type="String">
        /// Gets or sets the para_ProjectID for this screen.
        /// </field>
        /// <field name="WelderForWVFOffer" type="msls.VisualCollection" elementType="msls.application.sps_View_Get_Welder_For_WVF">
        /// Gets the welderForWVFOffer for this screen.
        /// </field>
        /// <field name="Welder2" type="msls.application.sps_View_Get_Welder_For_WVF">
        /// Gets or sets the welder2 for this screen.
        /// </field>
        /// <field name="Welder3" type="msls.application.sps_View_Get_Welder_For_WVF">
        /// Gets or sets the welder3 for this screen.
        /// </field>
        /// <field name="Welder4" type="msls.application.sps_View_Get_Welder_For_WVF">
        /// Gets or sets the welder4 for this screen.
        /// </field>
        /// <field name="Welder5" type="msls.application.sps_View_Get_Welder_For_WVF">
        /// Gets or sets the welder5 for this screen.
        /// </field>
        /// <field name="Welder6" type="msls.application.sps_View_Get_Welder_For_WVF">
        /// Gets or sets the welder6 for this screen.
        /// </field>
        /// <field name="Welder7" type="msls.application.sps_View_Get_Welder_For_WVF">
        /// Gets or sets the welder7 for this screen.
        /// </field>
        /// <field name="Welder8" type="msls.application.sps_View_Get_Welder_For_WVF">
        /// Gets or sets the welder8 for this screen.
        /// </field>
        /// <field name="Welder9" type="msls.application.sps_View_Get_Welder_For_WVF">
        /// Gets or sets the welder9 for this screen.
        /// </field>
        /// <field name="Welder10" type="msls.application.sps_View_Get_Welder_For_WVF">
        /// Gets or sets the welder10 for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditsps_WVFDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditsps_WVFDetail", parameters);
    }

    function Browsesps_Projects(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Browsesps_Projects screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="sps_Projects" type="msls.VisualCollection" elementType="msls.application.sps_Project">
        /// Gets the sps_Projects for this screen.
        /// </field>
        /// <field name="ProjectProperty" type="msls.application.sps_Project">
        /// Gets or sets the projectProperty for this screen.
        /// </field>
        /// <field name="ModuleProperty" type="msls.application.sps_Module">
        /// Gets or sets the moduleProperty for this screen.
        /// </field>
        /// <field name="ModuleProjectQuery" type="msls.VisualCollection" elementType="msls.application.sps_Module">
        /// Gets the moduleProjectQuery for this screen.
        /// </field>
        /// <field name="para_User_ID" type="String">
        /// Gets or sets the para_User_ID for this screen.
        /// </field>
        /// <field name="para_User_Name" type="String">
        /// Gets or sets the para_User_Name for this screen.
        /// </field>
        /// <field name="para_Plant" type="String">
        /// Gets or sets the para_Plant for this screen.
        /// </field>
        /// <field name="para_Project_Name" type="String">
        /// Gets or sets the para_Project_Name for this screen.
        /// </field>
        /// <field name="para_ProjectID" type="String">
        /// Gets or sets the para_ProjectID for this screen.
        /// </field>
        /// <field name="para_IMIRProjectID" type="String">
        /// Gets or sets the para_IMIRProjectID for this screen.
        /// </field>
        /// <field name="para_ModuleName" type="String">
        /// Gets or sets the para_ModuleName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Browsesps_Projects.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Browsesps_Projects", parameters);
    }

    function Menu(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Menu screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="para_ProjectID" type="String">
        /// Gets or sets the para_ProjectID for this screen.
        /// </field>
        /// <field name="para_ModuleID" type="String">
        /// Gets or sets the para_ModuleID for this screen.
        /// </field>
        /// <field name="para_UserID" type="String">
        /// Gets or sets the para_UserID for this screen.
        /// </field>
        /// <field name="para_Plant" type="String">
        /// Gets or sets the para_Plant for this screen.
        /// </field>
        /// <field name="para_User_Name" type="String">
        /// Gets or sets the para_User_Name for this screen.
        /// </field>
        /// <field name="para_IMIRProjectID" type="String">
        /// Gets or sets the para_IMIRProjectID for this screen.
        /// </field>
        /// <field name="para_ProjectName" type="String">
        /// Gets or sets the para_ProjectName for this screen.
        /// </field>
        /// <field name="wvf_no" type="String">
        /// Gets or sets the wvf_no for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Menu.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Menu", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEdit_NDEReq2: $defineScreen(AddEdit_NDEReq2, [
            { name: "getNdeBuffCREATE", kind: "local", type: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create },
            { name: "ParaWVFno", kind: "local", type: String },
            {
                name: "FILTERjointQUERY", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
                createQuery: function (WVF_No) {
                    return this.dataWorkspace.SPS_LSData.FILTERjointQUERY(WVF_No);
                }
            },
            { name: "RTNDEREMARK", kind: "local", type: String },
            { name: "UTNDEREMARK", kind: "local", type: String },
            { name: "MTNDEREMARK", kind: "local", type: String },
            { name: "PTNDEREMARK", kind: "local", type: String },
            { name: "PaUTremark", kind: "local", type: String },
            { name: "TOFDUTREMARK", kind: "local", type: String }
        ], [
        ]),

        AddEditsps_NDEReq1: $defineScreen(AddEditsps_NDEReq1, [
            { name: "paraModuleID", kind: "local", type: String },
            { name: "Get_NDE_Buffer_Det_for_Create", kind: "local", type: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create },
            {
                name: "NDE_query", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
                createQuery: function (Module_ID) {
                    return this.dataWorkspace.SPS_LSData.NDE_query(Module_ID);
                }
            },
            {
                name: "jointQuery1", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
                createQuery: function (DrgNo) {
                    return this.dataWorkspace.SPS_LSData.jointQuery(DrgNo);
                }
            }
        ], [
        ]),

        AddEditsps_WVF1: $defineScreen(AddEditsps_WVF1, [
            {
                name: "sps_WVFDetails", kind: "collection", elementType: lightSwitchApplication.sps_WVFDetail,
                getNavigationProperty: function () {
                    if (this.owner.sps_WVF) {
                        return this.owner.sps_WVF.details.properties.sps_WVFDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            { name: "StartDate", kind: "local", type: Date },
            { name: "ToDate", kind: "local", type: Date },
            { name: "para_ModuleID", kind: "local", type: String },
            { name: "sps_WVF", kind: "local", type: lightSwitchApplication.sps_WVF },
            {
                name: "GetWVFForDelete", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_WVFListForDelete,
                createQuery: function (FromDate, ToDate, c_Module) {
                    return this.dataWorkspace.SPS_LSData.GetWVFForDelete(FromDate, ToDate, c_Module);
                }
            }
        ], [
        ]),

        WVFDelete: $defineScreen(WVFDelete, [
            { name: "sps_WVFDetail", kind: "local", type: lightSwitchApplication.sps_WVFDetail },
            {
                name: "WVFForDelete", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
                createQuery: function (WVF_No) {
                    return this.dataWorkspace.SPS_LSData.WVFForDelete(WVF_No);
                }
            }
        ], [
        ]),

        AddEdit_Hardness_Report: $defineScreen(AddEdit_Hardness_Report, [
            { name: "sps_Hardness", kind: "local", type: lightSwitchApplication.sps_Hardness },
            { name: "Hardness_Offer_get", kind: "local", type: lightSwitchApplication.Hardness_offer_get },
            {
                name: "hardness_query", kind: "collection", elementType: lightSwitchApplication.Hardness_offer_get,
                createQuery: function (Module_ID, Joint_No) {
                    return this.dataWorkspace.SPS_LSData.hardness_query(Module_ID, Joint_No);
                }
            },
            {
                name: "Inspect_hardness_query", kind: "collection", elementType: lightSwitchApplication.Hardness_offer_get,
                createQuery: function (Module_ID) {
                    return this.dataWorkspace.SPS_LSData.Inspect_hardness_query(Module_ID);
                }
            },
            { name: "ParaModuleID", kind: "local", type: String }
        ], [
        ]),

        Inspect_FITUP1: $defineScreen(Inspect_FITUP1, [
            { name: "ParaModuleID", kind: "local", type: String },
            { name: "FITUP_ACCEPT_MAIN", kind: "local", type: lightSwitchApplication.FITUP_ACCEPT_MAIN },
            {
                name: "Display_Inspect_FITUP", kind: "collection", elementType: lightSwitchApplication.FITUP_ACCEPT_MAIN,
                createQuery: function (Module_ID) {
                    return this.dataWorkspace.SPS_LSData.Display_Inspect_FITUP(Module_ID);
                }
            }
        ], [
        ]),

        Inspect_FITUP2: $defineScreen(Inspect_FITUP2, [
            { name: "ParaModuleID", kind: "local", type: String },
            {
                name: "displayFITUP_QUERY", kind: "collection", elementType: lightSwitchApplication.Get_FTU_For_inspect_closed,
                createQuery: function (FTU_No) {
                    return this.dataWorkspace.SPS_LSData.displayFITUP_QUERY(FTU_No);
                }
            },
            { name: "paraFTUno", kind: "local", type: String },
            { name: "RemarkQC", kind: "local", type: String },
            { name: "QCREMARK", kind: "local", type: String },
            { name: "IDOfInstruemntUsed", kind: "local", type: String }
        ], [
        ]),

        Inspect_MI1: $defineScreen(Inspect_MI1, [
            { name: "GET_MPI_INSPECTProperty", kind: "local", type: lightSwitchApplication.GET_MPI_INSPECT },
            { name: "ParaModuleID", kind: "local", type: String },
            {
                name: "Inspect_MIquery", kind: "collection", elementType: lightSwitchApplication.GET_MPI_INSPECT,
                createQuery: function (Module_ID_l2_Module) {
                    return this.dataWorkspace.SPS_LSData.Inspect_MIquery(Module_ID_l2_Module);
                }
            }
        ], [
        ]),

        Inspect_MI2: $defineScreen(Inspect_MI2, [
            { name: "paraMPINo", kind: "local", type: String },
            { name: "QC_Inspect_MPT_Property", kind: "local", type: lightSwitchApplication.GET_QC_INSPECT_MPI },
            {
                name: "QC_Inspect_MPT_Query", kind: "collection", elementType: lightSwitchApplication.GET_QC_INSPECT_MPI,
                createQuery: function (MPI_No) {
                    return this.dataWorkspace.SPS_LSData.QC_Inspect_MPT_Query(MPI_No);
                }
            },
            { name: "OfferedQTY", kind: "local", type: String },
            { name: "paraModuleID", kind: "local", type: String },
            { name: "QCremark", kind: "local", type: String },
            { name: "REMARK", kind: "local", type: String },
            { name: "QTYaccepted", kind: "local", type: Boolean }
        ], [
        ]),

        Inspect_PWHT1: $defineScreen(Inspect_PWHT1, [
            { name: "GET_PWHT_INSPECT_ACCEPT", kind: "local", type: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT },
            { name: "ParaModuleID", kind: "local", type: String },
            {
                name: "GET_PWHT_INSPECTQUery", kind: "collection", elementType: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT,
                createQuery: function (Module_ID) {
                    return this.dataWorkspace.SPS_LSData.GET_PWHT_INSPECTQUery(Module_ID);
                }
            },
            { name: "ParaProjectID", kind: "local", type: String }
        ], [
        ]),

        Inspect_PWHT2: $defineScreen(Inspect_PWHT2, [
            { name: "GET_PWHT_JOINT_ACCEPT", kind: "local", type: lightSwitchApplication.GET_PWHT_JOINT_ACCEPT },
            {
                name: "INSPECT_PWHT_detail_query", kind: "collection", elementType: lightSwitchApplication.GET_PWHT_JOINT_ACCEPT,
                createQuery: function (PWHT_No) {
                    return this.dataWorkspace.SPS_LSData.INSPECT_PWHT_detail_query(PWHT_No);
                }
            },
            { name: "ParaPWHTno", kind: "local", type: String },
            { name: "ParaModuleID", kind: "local", type: String },
            { name: "NOFTHERMOCOUPLES", kind: "local", type: String },
            { name: "LOADINGTEMPactual", kind: "local", type: String },
            { name: "RATEOFHEATINGactual", kind: "local", type: String },
            { name: "SOAKINGTEMPactual", kind: "local", type: String },
            { name: "SOAKINGPERIODactual", kind: "local", type: String },
            { name: "RATEOFCOOLINGactual", kind: "local", type: String },
            { name: "UNLOADINGTEMPactual", kind: "local", type: String },
            { name: "QCremark", kind: "local", type: String },
            { name: "accept", kind: "local", type: Boolean },
            { name: "ProcedureProperty", kind: "local", type: lightSwitchApplication.sps_Master_Proceduer },
            { name: "paraProjectID", kind: "local", type: String },
            {
                name: "ProcedureQuery", kind: "collection", elementType: lightSwitchApplication.sps_Master_Proceduer,
                createQuery: function (ProjectID) {
                    return this.dataWorkspace.SPS_LSData.ProcedureQuery(ProjectID);
                }
            },
            {
                name: "CodeOfConstructionQuery", kind: "collection", elementType: lightSwitchApplication.sps_Matser_CodeOfConstruction,
                createQuery: function (ProjectID) {
                    return this.dataWorkspace.SPS_LSData.CodeOfConstructionQuery(ProjectID);
                }
            },
            { name: "CodeOfConstProperty", kind: "local", type: lightSwitchApplication.sps_Matser_CodeOfConstruction },
            { name: "LoadingTemp", kind: "local", type: String },
            { name: "RateOFheating", kind: "local", type: String },
            { name: "soakingTemp", kind: "local", type: String },
            { name: "soakingPeriod", kind: "local", type: String },
            { name: "RateOFcooling", kind: "local", type: String },
            { name: "unloadingTemp", kind: "local", type: String },
            { name: "TEMPRECORDSRNOVALIDITY", kind: "local", type: String },
            { name: "THERMOCOUPLENOVALIDITY", kind: "local", type: String },
            { name: "CHARTSPEED", kind: "local", type: String },
            { name: "CHARTNO", kind: "local", type: String },
            { name: "STARTINGTIMEDATE", kind: "local", type: Date },
            { name: "ENDINGTIMEDATE", kind: "local", type: Date },
            { name: "TEMPERATURERECORDERVALIDITY", kind: "local", type: Date },
            { name: "THERMOCOUPLEVALIDITY", kind: "local", type: Date }
        ], [
        ]),

        Inspect_WVF2: $defineScreen(Inspect_WVF2, [
            { name: "paraWVFNo", kind: "local", type: String },
            { name: "paraModuleID", kind: "local", type: String },
            { name: "WVF_Detail_Inpsect_Property", kind: "local", type: lightSwitchApplication.Inspect_WVF_Detail },
            { name: "Joint_ID", kind: "local", type: String },
            { name: "Joint_No", kind: "local", type: String },
            { name: "Result", kind: "local", type: Boolean },
            { name: "RTOffer", kind: "local", type: Boolean },
            { name: "QCWVFremark", kind: "local", type: String },
            { name: "RTNDEremark", kind: "local", type: String },
            { name: "UTOffer", kind: "local", type: Boolean },
            { name: "UTNDERemark", kind: "local", type: String },
            { name: "MTOffer", kind: "local", type: Boolean },
            { name: "PTOffer", kind: "local", type: Boolean },
            { name: "PAUTOffer", kind: "local", type: Boolean },
            { name: "TOFDUTOffer", kind: "local", type: Boolean },
            { name: "MTNDEREMARK", kind: "local", type: String },
            { name: "PTNDEREMARK", kind: "local", type: String },
            { name: "PAUTNDEREMARK", kind: "local", type: String },
            { name: "TOFDUTNDEREMARK", kind: "local", type: String },
            {
                name: "INspect_WVF_Detail_Query1", kind: "collection", elementType: lightSwitchApplication.Inspect_WVF_Detail,
                createQuery: function (WVF_No) {
                    return this.dataWorkspace.SPS_LSData.INspect_WVF_Detail_Query(WVF_No);
                }
            },
            { name: "QCREMARK", kind: "local", type: String }
        ], [
        ]),

        WVFInspect1: $defineScreen(WVFInspect1, [
            { name: "paraModuleID", kind: "local", type: String },
            { name: "Inspect_Wvf_Property", kind: "local", type: lightSwitchApplication.GET_INSPECT_For_WVF },
            {
                name: "Inspect_WVF_Query", kind: "collection", elementType: lightSwitchApplication.GET_INSPECT_For_WVF,
                createQuery: function (Module_ID) {
                    return this.dataWorkspace.SPS_LSData.Inspect_WVF_Query(Module_ID);
                }
            }
        ], [
        ]),

        AddEditsps_FTU: $defineScreen(AddEditsps_FTU, [
            { name: "sps_FTU", kind: "local", type: lightSwitchApplication.sps_FTU },
            {
                name: "sps_FTUDetails", kind: "collection", elementType: lightSwitchApplication.sps_FTUDetail,
                getNavigationProperty: function () {
                    if (this.owner.sps_FTU) {
                        return this.owner.sps_FTU.details.properties.sps_FTUDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            { name: "para_ProjectID", kind: "local", type: String },
            { name: "para_ModuleID", kind: "local", type: String },
            { name: "LocationProperty", kind: "local", type: lightSwitchApplication.sps_Location },
            { name: "para_User_Name", kind: "local", type: String },
            { name: "para_Plant", kind: "local", type: String },
            { name: "ContractorProperty", kind: "local", type: lightSwitchApplication.GET_CONTRACTOR },
            {
                name: "ContractorModuleQuery", kind: "collection", elementType: lightSwitchApplication.GET_CONTRACTOR,
                createQuery: function (Module_ID) {
                    return this.dataWorkspace.SPS_LSData.ContractorModuleQuery(Module_ID);
                }
            },
            {
                name: "LocationProjectQuery", kind: "collection", elementType: lightSwitchApplication.sps_Location,
                createQuery: function (Plant) {
                    return this.dataWorkspace.SPS_LSData.LocationProjectQuery(Plant);
                }
            },
            { name: "para_ProjectName", kind: "local", type: String }
        ], [
        ]),

        AddEditsps_FTUDetail: $defineScreen(AddEditsps_FTUDetail, [
            { name: "sps_FTUDetail", kind: "local", type: lightSwitchApplication.sps_FTUDetail },
            { name: "para_ModuleID", kind: "local", type: String },
            { name: "JointNoProperty", kind: "local", type: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer },
            {
                name: "JointNoForFitupOffer", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
                createQuery: function (Drg_ID_l2_DrgList) {
                    return this.dataWorkspace.SPS_LSData.JointNoForFitupOffer(Drg_ID_l2_DrgList);
                }
            },
            {
                name: "DisplayJointNoForFitupOffer", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
                createQuery: function (Drg_ID_l2_DrgList, Joint_ID) {
                    return this.dataWorkspace.SPS_LSData.DisplayJointNoForFitupOffer(Drg_ID_l2_DrgList, Joint_ID);
                }
            },
            {
                name: "DisplayDrgNoForFitupOffer", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer,
                createQuery: function (Drg_ID, Module_ID_l2_Module) {
                    return this.dataWorkspace.SPS_LSData.DisplayDrgNoForFitupOffer(Drg_ID, Module_ID_l2_Module);
                }
            },
            {
                name: "DrgNoForFitupOffer", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer,
                createQuery: function (Module_ID_l2_Module) {
                    return this.dataWorkspace.SPS_LSData.DrgNoForFitupOffer(Module_ID_l2_Module);
                }
            },
            { name: "DrgNoProperty", kind: "local", type: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer },
            { name: "IMIRIDHeat1Property", kind: "local", type: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item },
            {
                name: "IMIRIDHeatForFitupOffer1", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item,
                createQuery: function (Drg_ID, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return this.dataWorkspace.SPS_LSData.IMIRIDHeatForFitupOffer1(Drg_ID, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module);
                }
            },
            { name: "IMIRIDHeat2Property", kind: "local", type: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item },
            {
                name: "IMIRIDHeatForFitupOffer2", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item,
                createQuery: function (Drg_ID_2, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return this.dataWorkspace.SPS_LSData.IMIRIDHeatForFitupOffer2(Drg_ID_2, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module);
                }
            },
            { name: "IMIRIDHeat3Property", kind: "local", type: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item },
            {
                name: "IMIRIDHeatForFitupOffer3", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item,
                createQuery: function (Drg_ID_3, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module, IMIRNO) {
                    return this.dataWorkspace.SPS_LSData.IMIRIDHeatForFitupOffer3(Drg_ID_3, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module, IMIRNO);
                }
            },
            { name: "para_ProjectName", kind: "local", type: String },
            { name: "IMIRIDHeat4Property", kind: "local", type: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item },
            {
                name: "IMIRIDHeatForFitupOffer4", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item,
                createQuery: function (Drg_ID_4, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return this.dataWorkspace.SPS_LSData.IMIRIDHeatForFitupOffer4(Drg_ID_4, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module);
                }
            },
            { name: "IMIRIDHeat5Property", kind: "local", type: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item },
            {
                name: "IMIRIDHeatForFitupOffer5", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item,
                createQuery: function (Drg_ID_5, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module) {
                    return this.dataWorkspace.SPS_LSData.IMIRIDHeatForFitupOffer5(Drg_ID_5, Drg_id_l2_drglist, Joint_No, Part_No_l2_Drg_BOQ, Module_ID_l2_Module);
                }
            },
            {
                name: "MPINoForFitupOffer", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer,
                createQuery: function (DrgIDFromDrawing, Module_ID_l2_Module, Part_No_l2_Drg_BOQ, joint_no) {
                    return this.dataWorkspace.SPS_LSData.MPINoForFitupOffer(DrgIDFromDrawing, Module_ID_l2_Module, Part_No_l2_Drg_BOQ, joint_no);
                }
            },
            { name: "MPI1", kind: "local", type: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer },
            {
                name: "MPINoForFitupOffer2", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer,
                createQuery: function (DrgIDFromDrawing, Module_ID_l2_Module, Part_No_l2_Drg_BOQ, joint_no) {
                    return this.dataWorkspace.SPS_LSData.MPINoForFitupOffer(DrgIDFromDrawing, Module_ID_l2_Module, Part_No_l2_Drg_BOQ, joint_no);
                }
            },
            {
                name: "MPINoForFitupOffer3", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer,
                createQuery: function (DrgIDFromDrawing, Module_ID_l2_Module, Part_No_l2_Drg_BOQ, joint_no) {
                    return this.dataWorkspace.SPS_LSData.MPINoForFitupOffer(DrgIDFromDrawing, Module_ID_l2_Module, Part_No_l2_Drg_BOQ, joint_no);
                }
            },
            {
                name: "MPINoForFitupOffer4", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer,
                createQuery: function (DrgIDFromDrawing, Module_ID_l2_Module, Part_No_l2_Drg_BOQ, joint_no) {
                    return this.dataWorkspace.SPS_LSData.MPINoForFitupOffer(DrgIDFromDrawing, Module_ID_l2_Module, Part_No_l2_Drg_BOQ, joint_no);
                }
            },
            {
                name: "MPINoForFitupOffer5", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer,
                createQuery: function (DrgIDFromDrawing, Module_ID_l2_Module, Part_No_l2_Drg_BOQ, joint_no) {
                    return this.dataWorkspace.SPS_LSData.MPINoForFitupOffer(DrgIDFromDrawing, Module_ID_l2_Module, Part_No_l2_Drg_BOQ, joint_no);
                }
            },
            { name: "MPI2", kind: "local", type: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer },
            { name: "MPI3", kind: "local", type: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer },
            { name: "MPI4", kind: "local", type: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer },
            { name: "MPI5", kind: "local", type: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer }
        ], [
        ]),

        AddEditsps_MPI: $defineScreen(AddEditsps_MPI, [
            { name: "sps_MPI", kind: "local", type: lightSwitchApplication.sps_MPI },
            {
                name: "sps_MPI_Detail_Offs", kind: "collection", elementType: lightSwitchApplication.sps_MPI_Detail_Off,
                getNavigationProperty: function () {
                    if (this.owner.sps_MPI) {
                        return this.owner.sps_MPI.details.properties.sps_MPI_Detail_Offs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            { name: "DrgProperty", kind: "local", type: lightSwitchApplication.sps_DrgList },
            {
                name: "DrgFromModule", kind: "collection", elementType: lightSwitchApplication.sps_DrgList,
                createQuery: function (Module_ID) {
                    return this.dataWorkspace.SPS_LSData.DrgFromModule(Module_ID);
                }
            },
            { name: "para_ModuleID", kind: "local", type: String },
            { name: "para_IMIRProjectID", kind: "local", type: String }
        ], [
            { name: "RemoveMPIDetail" }
        ]),

        AddEditsps_MPI_Detail_Off: $defineScreen(AddEditsps_MPI_Detail_Off, [
            { name: "sps_MPI_Detail_Off", kind: "local", type: lightSwitchApplication.sps_MPI_Detail_Off },
            { name: "PartNoProperty", kind: "local", type: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer },
            {
                name: "PartNoFromDrgIDForMIOffer", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
                createQuery: function (Drg_ID_l2_DrgList) {
                    return this.dataWorkspace.SPS_LSData.PartNoFromDrgIDForMIOffer(Drg_ID_l2_DrgList);
                }
            },
            { name: "para_DrgID", kind: "local", type: String },
            { name: "para_ModuleID", kind: "local", type: String },
            { name: "para_IMIRProjectID", kind: "local", type: String },
            {
                name: "DisplayPartNoForMIOfferNew", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
                createQuery: function (Module_ID, Project_ID_l2_Project, Drg_ID_l2_DrgList, Part_No) {
                    return this.dataWorkspace.SPS_LSData.DisplayPartNoForMIOfferNew(Module_ID, Project_ID_l2_Project, Drg_ID_l2_DrgList, Part_No);
                }
            }
        ], [
        ]),

        AddEditsps_NDEReq: $defineScreen(AddEditsps_NDEReq, [
            { name: "sps_NDEReq", kind: "local", type: lightSwitchApplication.sps_NDEReq },
            {
                name: "sps_NDEReqDets", kind: "collection", elementType: lightSwitchApplication.sps_NDEReqDet,
                getNavigationProperty: function () {
                    if (this.owner.sps_NDEReq) {
                        return this.owner.sps_NDEReq.details.properties.sps_NDEReqDets;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            { name: "DrgNoProperty", kind: "local", type: lightSwitchApplication.sps_view_getDrgNo_for_ndeOffer },
            { name: "para_ModuleID", kind: "local", type: String },
            {
                name: "DrgNoForNdeOffer", kind: "collection", elementType: lightSwitchApplication.sps_view_getDrgNo_for_ndeOffer,
                createQuery: function (Module_ID_l2_Module) {
                    return this.dataWorkspace.SPS_LSData.DrgNoForNdeOffer(Module_ID_l2_Module);
                }
            }
        ], [
        ]),

        AddEditsps_PWHT: $defineScreen(AddEditsps_PWHT, [
            { name: "sps_PWHT", kind: "local", type: lightSwitchApplication.sps_PWHT },
            {
                name: "sps_PWHTDetails", kind: "collection", elementType: lightSwitchApplication.sps_PWHTDetail,
                getNavigationProperty: function () {
                    if (this.owner.sps_PWHT) {
                        return this.owner.sps_PWHT.details.properties.sps_PWHTDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            { name: "para_ModuleID", kind: "local", type: String }
        ], [
        ]),

        AddEditsps_PWHTDetail: $defineScreen(AddEditsps_PWHTDetail, [
            { name: "sps_PWHTDetail", kind: "local", type: lightSwitchApplication.sps_PWHTDetail },
            { name: "para_ModuleID", kind: "local", type: String },
            { name: "DrgNoProperty", kind: "local", type: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT },
            {
                name: "DrgNoForPWHT", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
                createQuery: function (Module_ID) {
                    return this.dataWorkspace.SPS_LSData.DrgNoForPWHT(Module_ID);
                }
            },
            { name: "JointNoProperty", kind: "local", type: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT },
            {
                name: "JointNoForPWHTOffer", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
                createQuery: function (Drg_ID, Module_ID) {
                    return this.dataWorkspace.SPS_LSData.JointNoForPWHTOffer(Drg_ID, Module_ID);
                }
            }
        ], [
        ]),

        AddEditsps_WVF: $defineScreen(AddEditsps_WVF, [
            { name: "sps_WVF", kind: "local", type: lightSwitchApplication.sps_WVF },
            {
                name: "sps_WVFDetails", kind: "collection", elementType: lightSwitchApplication.sps_WVFDetail,
                getNavigationProperty: function () {
                    if (this.owner.sps_WVF) {
                        return this.owner.sps_WVF.details.properties.sps_WVFDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            { name: "para_ModuleID", kind: "local", type: String },
            { name: "para_ProjectID", kind: "local", type: String }
        ], [
        ]),

        AddEditsps_WVFDetail: $defineScreen(AddEditsps_WVFDetail, [
            { name: "sps_WVFDetail", kind: "local", type: lightSwitchApplication.sps_WVFDetail },
            { name: "DrgNoProperty", kind: "local", type: lightSwitchApplication.sps_View_Get_Drg_No_For_WVF },
            {
                name: "DrgNoForWVFOffer", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_Drg_No_For_WVF,
                createQuery: function (Module_ID) {
                    return this.dataWorkspace.SPS_LSData.DrgNoForWVFOffer(Module_ID);
                }
            },
            { name: "para_ModuleID", kind: "local", type: String },
            { name: "JointNoProperty", kind: "local", type: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF },
            {
                name: "JointNoForWVFOffer", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
                createQuery: function (Drg_ID) {
                    return this.dataWorkspace.SPS_LSData.JointNoForWVFOffer(Drg_ID);
                }
            },
            { name: "Welder1", kind: "local", type: lightSwitchApplication.sps_View_Get_Welder_For_WVF },
            { name: "para_ProjectID", kind: "local", type: String },
            {
                name: "WelderForWVFOffer", kind: "collection", elementType: lightSwitchApplication.sps_View_Get_Welder_For_WVF,
                createQuery: function (Project_ID_l2_Project) {
                    return this.dataWorkspace.SPS_LSData.WelderForWVFOffer(Project_ID_l2_Project);
                }
            },
            { name: "Welder2", kind: "local", type: lightSwitchApplication.sps_View_Get_Welder_For_WVF },
            { name: "Welder3", kind: "local", type: lightSwitchApplication.sps_View_Get_Welder_For_WVF },
            { name: "Welder4", kind: "local", type: lightSwitchApplication.sps_View_Get_Welder_For_WVF },
            { name: "Welder5", kind: "local", type: lightSwitchApplication.sps_View_Get_Welder_For_WVF },
            { name: "Welder6", kind: "local", type: lightSwitchApplication.sps_View_Get_Welder_For_WVF },
            { name: "Welder7", kind: "local", type: lightSwitchApplication.sps_View_Get_Welder_For_WVF },
            { name: "Welder8", kind: "local", type: lightSwitchApplication.sps_View_Get_Welder_For_WVF },
            { name: "Welder9", kind: "local", type: lightSwitchApplication.sps_View_Get_Welder_For_WVF },
            { name: "Welder10", kind: "local", type: lightSwitchApplication.sps_View_Get_Welder_For_WVF }
        ], [
        ]),

        Browsesps_Projects: $defineScreen(Browsesps_Projects, [
            {
                name: "sps_Projects", kind: "collection", elementType: lightSwitchApplication.sps_Project,
                createQuery: function (Project_ID) {
                    return this.dataWorkspace.SPS_LSData.sps_Projects.filter("" + ((Project_ID === undefined || Project_ID === null) ? "false" : "(Project_ID eq " + $toODataString(Project_ID, "String?") + ")") + "");
                }
            },
            { name: "ProjectProperty", kind: "local", type: lightSwitchApplication.sps_Project },
            { name: "ModuleProperty", kind: "local", type: lightSwitchApplication.sps_Module },
            {
                name: "ModuleProjectQuery", kind: "collection", elementType: lightSwitchApplication.sps_Module,
                createQuery: function (Project_ID) {
                    return this.dataWorkspace.SPS_LSData.ModuleProjectQuery(Project_ID);
                }
            },
            { name: "para_User_ID", kind: "local", type: String },
            { name: "para_User_Name", kind: "local", type: String },
            { name: "para_Plant", kind: "local", type: String },
            { name: "para_Project_Name", kind: "local", type: String },
            { name: "para_ProjectID", kind: "local", type: String },
            { name: "para_IMIRProjectID", kind: "local", type: String },
            { name: "para_ModuleName", kind: "local", type: String }
        ], [
        ]),

        Menu: $defineScreen(Menu, [
            { name: "para_ProjectID", kind: "local", type: String },
            { name: "para_ModuleID", kind: "local", type: String },
            { name: "para_UserID", kind: "local", type: String },
            { name: "para_Plant", kind: "local", type: String },
            { name: "para_User_Name", kind: "local", type: String },
            { name: "para_IMIRProjectID", kind: "local", type: String },
            { name: "para_ProjectName", kind: "local", type: String },
            { name: "wvf_no", kind: "local", type: String }
        ], [
        ]),

        showAddEdit_NDEReq2: $defineShowScreen(function showAddEdit_NDEReq2(ParaWVFno, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEdit_NDEReq2 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEdit_NDEReq2", parameters, options);
        }),

        showAddEditsps_NDEReq1: $defineShowScreen(function showAddEditsps_NDEReq1(paraModuleID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditsps_NDEReq1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditsps_NDEReq1", parameters, options);
        }),

        showAddEditsps_WVF1: $defineShowScreen(function showAddEditsps_WVF1(para_ModuleID, sps_WVF, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditsps_WVF1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("AddEditsps_WVF1", parameters, options);
        }),

        showWVFDelete: $defineShowScreen(function showWVFDelete(sps_WVFDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the WVFDelete screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("WVFDelete", parameters, options);
        }),

        showAddEdit_Hardness_Report: $defineShowScreen(function showAddEdit_Hardness_Report(sps_Hardness, ParaModuleID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEdit_Hardness_Report screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("AddEdit_Hardness_Report", parameters, options);
        }),

        showInspect_FITUP1: $defineShowScreen(function showInspect_FITUP1(ParaModuleID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the Inspect_FITUP1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("Inspect_FITUP1", parameters, options);
        }),

        showInspect_FITUP2: $defineShowScreen(function showInspect_FITUP2(ParaModuleID, paraFTUno, options) {
            /// <summary>
            /// Asynchronously navigates forward to the Inspect_FITUP2 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("Inspect_FITUP2", parameters, options);
        }),

        showInspect_MI1: $defineShowScreen(function showInspect_MI1(ParaModuleID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the Inspect_MI1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("Inspect_MI1", parameters, options);
        }),

        showInspect_MI2: $defineShowScreen(function showInspect_MI2(paraMPINo, paraModuleID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the Inspect_MI2 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("Inspect_MI2", parameters, options);
        }),

        showInspect_PWHT1: $defineShowScreen(function showInspect_PWHT1(ParaModuleID, ParaProjectID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the Inspect_PWHT1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("Inspect_PWHT1", parameters, options);
        }),

        showInspect_PWHT2: $defineShowScreen(function showInspect_PWHT2(ParaPWHTno, ParaModuleID, paraProjectID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the Inspect_PWHT2 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 3);
            return lightSwitchApplication.showScreen("Inspect_PWHT2", parameters, options);
        }),

        showInspect_WVF2: $defineShowScreen(function showInspect_WVF2(paraWVFNo, paraModuleID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the Inspect_WVF2 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("Inspect_WVF2", parameters, options);
        }),

        showWVFInspect1: $defineShowScreen(function showWVFInspect1(paraModuleID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the WVFInspect1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("WVFInspect1", parameters, options);
        }),

        showAddEditsps_FTU: $defineShowScreen(function showAddEditsps_FTU(sps_FTU, para_ProjectID, para_ModuleID, para_User_Name, para_Plant, para_ProjectName, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditsps_FTU screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 6);
            return lightSwitchApplication.showScreen("AddEditsps_FTU", parameters, options);
        }),

        showAddEditsps_FTUDetail: $defineShowScreen(function showAddEditsps_FTUDetail(sps_FTUDetail, para_ModuleID, para_ProjectName, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditsps_FTUDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 3);
            return lightSwitchApplication.showScreen("AddEditsps_FTUDetail", parameters, options);
        }),

        showAddEditsps_MPI: $defineShowScreen(function showAddEditsps_MPI(sps_MPI, para_ModuleID, para_IMIRProjectID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditsps_MPI screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 3);
            return lightSwitchApplication.showScreen("AddEditsps_MPI", parameters, options);
        }),

        showAddEditsps_MPI_Detail_Off: $defineShowScreen(function showAddEditsps_MPI_Detail_Off(sps_MPI_Detail_Off, para_DrgID, para_ModuleID, para_IMIRProjectID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditsps_MPI_Detail_Off screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 4);
            return lightSwitchApplication.showScreen("AddEditsps_MPI_Detail_Off", parameters, options);
        }),

        showAddEditsps_NDEReq: $defineShowScreen(function showAddEditsps_NDEReq(sps_NDEReq, para_ModuleID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditsps_NDEReq screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("AddEditsps_NDEReq", parameters, options);
        }),

        showAddEditsps_PWHT: $defineShowScreen(function showAddEditsps_PWHT(sps_PWHT, para_ModuleID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditsps_PWHT screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("AddEditsps_PWHT", parameters, options);
        }),

        showAddEditsps_PWHTDetail: $defineShowScreen(function showAddEditsps_PWHTDetail(sps_PWHTDetail, para_ModuleID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditsps_PWHTDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("AddEditsps_PWHTDetail", parameters, options);
        }),

        showAddEditsps_WVF: $defineShowScreen(function showAddEditsps_WVF(sps_WVF, para_ModuleID, para_ProjectID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditsps_WVF screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 3);
            return lightSwitchApplication.showScreen("AddEditsps_WVF", parameters, options);
        }),

        showAddEditsps_WVFDetail: $defineShowScreen(function showAddEditsps_WVFDetail(sps_WVFDetail, para_ModuleID, para_ProjectID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditsps_WVFDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 3);
            return lightSwitchApplication.showScreen("AddEditsps_WVFDetail", parameters, options);
        }),

        showBrowsesps_Projects: $defineShowScreen(function showBrowsesps_Projects(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Browsesps_Projects screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Browsesps_Projects", parameters, options);
        }),

        showMenu: $defineShowScreen(function showMenu(para_ProjectID, para_ModuleID, para_UserID, para_Plant, para_User_Name, para_IMIRProjectID, para_ProjectName, options) {
            /// <summary>
            /// Asynchronously navigates forward to the Menu screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 7);
            return lightSwitchApplication.showScreen("Menu", parameters, options);
        })

    });

}(msls.application));
