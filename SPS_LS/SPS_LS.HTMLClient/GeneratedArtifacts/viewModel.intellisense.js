/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEdit_NDEReq2.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEdit_NDEReq2
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.AddEdit_NDEReq2,
            value: lightSwitchApplication.AddEdit_NDEReq2
        },
        FILTERjointQUERY: {
            _$class: msls.ContentItem,
            _$name: "FILTERjointQUERY",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.AddEdit_NDEReq2,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEdit_NDEReq2,
                _$entry: {
                    elementType: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create
                }
            }
        },
        FILTERjointQUERYTemplate: {
            _$class: msls.ContentItem,
            _$name: "FILTERjointQUERYTemplate",
            _$parentName: "FILTERjointQUERY",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create
        },
        Joint_No: {
            _$class: msls.ContentItem,
            _$name: "Joint_No",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        WVF_No: {
            _$class: msls.ContentItem,
            _$name: "WVF_No",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        Insp_Date: {
            _$class: msls.ContentItem,
            _$name: "Insp_Date",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: Date
        },
        flg_RT: {
            _$class: msls.ContentItem,
            _$name: "flg_RT",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        RT_Per: {
            _$class: msls.ContentItem,
            _$name: "RT_Per",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        Status_RT: {
            _$class: msls.ContentItem,
            _$name: "Status_RT",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        RTNDEREMARK: {
            _$class: msls.ContentItem,
            _$name: "RTNDEREMARK",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        flg_UT: {
            _$class: msls.ContentItem,
            _$name: "flg_UT",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        UT_Per: {
            _$class: msls.ContentItem,
            _$name: "UT_Per",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        Status_UT: {
            _$class: msls.ContentItem,
            _$name: "Status_UT",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        UTNDEREMARK: {
            _$class: msls.ContentItem,
            _$name: "UTNDEREMARK",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        flg_MT: {
            _$class: msls.ContentItem,
            _$name: "flg_MT",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        MT_Per: {
            _$class: msls.ContentItem,
            _$name: "MT_Per",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        Status_MT: {
            _$class: msls.ContentItem,
            _$name: "Status_MT",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        MTNDEREMARK: {
            _$class: msls.ContentItem,
            _$name: "MTNDEREMARK",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        flg_PT: {
            _$class: msls.ContentItem,
            _$name: "flg_PT",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        PT_Per: {
            _$class: msls.ContentItem,
            _$name: "PT_Per",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        Status_PT: {
            _$class: msls.ContentItem,
            _$name: "Status_PT",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        PTNDEREMARK: {
            _$class: msls.ContentItem,
            _$name: "PTNDEREMARK",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        flg_PA_UT: {
            _$class: msls.ContentItem,
            _$name: "flg_PA_UT",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        PA_UT_Per: {
            _$class: msls.ContentItem,
            _$name: "PA_UT_Per",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        Status_PA_UT: {
            _$class: msls.ContentItem,
            _$name: "Status_PA_UT",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        PaUTremark: {
            _$class: msls.ContentItem,
            _$name: "PaUTremark",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        flg_TOFD_UT: {
            _$class: msls.ContentItem,
            _$name: "flg_TOFD_UT",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        TOFD_UT_Per: {
            _$class: msls.ContentItem,
            _$name: "TOFD_UT_Per",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        Status_TOFD_UT: {
            _$class: msls.ContentItem,
            _$name: "Status_TOFD_UT",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        TOFDUTREMARK: {
            _$class: msls.ContentItem,
            _$name: "TOFDUTREMARK",
            _$parentName: "FILTERjointQUERYTemplate",
            screen: lightSwitchApplication.AddEdit_NDEReq2,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEdit_NDEReq2
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEdit_NDEReq2, {
        /// <field>
        /// Called when a new AddEdit_NDEReq2 screen is created.
        /// <br/>created(msls.application.AddEdit_NDEReq2 screen)
        /// </field>
        created: [lightSwitchApplication.AddEdit_NDEReq2],
        /// <field>
        /// Called before changes on an active AddEdit_NDEReq2 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEdit_NDEReq2 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEdit_NDEReq2],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("Details"); }],
        /// <field>
        /// Called after the FILTERjointQUERY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FILTERjointQUERY_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("FILTERjointQUERY"); }],
        /// <field>
        /// Called after the FILTERjointQUERYTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FILTERjointQUERYTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("FILTERjointQUERYTemplate"); }],
        /// <field>
        /// Called after the Joint_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("Joint_No"); }],
        /// <field>
        /// Called after the WVF_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVF_No_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("WVF_No"); }],
        /// <field>
        /// Called after the Insp_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Insp_Date_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("Insp_Date"); }],
        /// <field>
        /// Called after the flg_RT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_RT_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("flg_RT"); }],
        /// <field>
        /// Called after the RT_Per content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RT_Per_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("RT_Per"); }],
        /// <field>
        /// Called after the Status_RT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_RT_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("Status_RT"); }],
        /// <field>
        /// Called after the RTNDEREMARK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RTNDEREMARK_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("RTNDEREMARK"); }],
        /// <field>
        /// Called after the flg_UT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_UT_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("flg_UT"); }],
        /// <field>
        /// Called after the UT_Per content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UT_Per_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("UT_Per"); }],
        /// <field>
        /// Called after the Status_UT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_UT_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("Status_UT"); }],
        /// <field>
        /// Called after the UTNDEREMARK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UTNDEREMARK_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("UTNDEREMARK"); }],
        /// <field>
        /// Called after the flg_MT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_MT_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("flg_MT"); }],
        /// <field>
        /// Called after the MT_Per content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MT_Per_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("MT_Per"); }],
        /// <field>
        /// Called after the Status_MT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_MT_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("Status_MT"); }],
        /// <field>
        /// Called after the MTNDEREMARK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MTNDEREMARK_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("MTNDEREMARK"); }],
        /// <field>
        /// Called after the flg_PT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_PT_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("flg_PT"); }],
        /// <field>
        /// Called after the PT_Per content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PT_Per_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("PT_Per"); }],
        /// <field>
        /// Called after the Status_PT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_PT_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("Status_PT"); }],
        /// <field>
        /// Called after the PTNDEREMARK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PTNDEREMARK_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("PTNDEREMARK"); }],
        /// <field>
        /// Called after the flg_PA_UT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_PA_UT_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("flg_PA_UT"); }],
        /// <field>
        /// Called after the PA_UT_Per content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PA_UT_Per_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("PA_UT_Per"); }],
        /// <field>
        /// Called after the Status_PA_UT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_PA_UT_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("Status_PA_UT"); }],
        /// <field>
        /// Called after the PaUTremark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PaUTremark_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("PaUTremark"); }],
        /// <field>
        /// Called after the flg_TOFD_UT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_TOFD_UT_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("flg_TOFD_UT"); }],
        /// <field>
        /// Called after the TOFD_UT_Per content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TOFD_UT_Per_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("TOFD_UT_Per"); }],
        /// <field>
        /// Called after the Status_TOFD_UT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_TOFD_UT_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("Status_TOFD_UT"); }],
        /// <field>
        /// Called after the TOFDUTREMARK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TOFDUTREMARK_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_NDEReq2().findContentItem("TOFDUTREMARK"); }]
    });

    lightSwitchApplication.AddEditsps_NDEReq1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_NDEReq1
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_NDEReq1,
            data: lightSwitchApplication.AddEditsps_NDEReq1,
            value: lightSwitchApplication.AddEditsps_NDEReq1
        },
        Get_NDE_Buffer_Det_for_Create: {
            _$class: msls.ContentItem,
            _$name: "Get_NDE_Buffer_Det_for_Create",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_NDEReq1,
            data: lightSwitchApplication.AddEditsps_NDEReq1,
            value: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create
        },
        sps_View_Get_NDE_Buff_Det_for_Create: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_NDE_Buff_Det_for_Create",
            _$parentName: "Get_NDE_Buffer_Det_for_Create",
            screen: lightSwitchApplication.AddEditsps_NDEReq1,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create
        },
        jointQuery1: {
            _$class: msls.ContentItem,
            _$name: "jointQuery1",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_NDEReq1,
            data: lightSwitchApplication.AddEditsps_NDEReq1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditsps_NDEReq1,
                _$entry: {
                    elementType: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create
                }
            }
        },
        jointQuery1Template: {
            _$class: msls.ContentItem,
            _$name: "jointQuery1Template",
            _$parentName: "jointQuery1",
            screen: lightSwitchApplication.AddEditsps_NDEReq1,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create
        },
        Joint_No: {
            _$class: msls.ContentItem,
            _$name: "Joint_No",
            _$parentName: "jointQuery1Template",
            screen: lightSwitchApplication.AddEditsps_NDEReq1,
            data: lightSwitchApplication.sps_View_Get_NDE_Buff_Det_for_Create,
            value: String
        },
        ShowAddEditsps_NDEReq1: {
            _$class: msls.ContentItem,
            _$name: "ShowAddEditsps_NDEReq1",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_NDEReq1
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_NDEReq1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditsps_NDEReq1, {
        /// <field>
        /// Called when a new AddEditsps_NDEReq1 screen is created.
        /// <br/>created(msls.application.AddEditsps_NDEReq1 screen)
        /// </field>
        created: [lightSwitchApplication.AddEditsps_NDEReq1],
        /// <field>
        /// Called before changes on an active AddEditsps_NDEReq1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditsps_NDEReq1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditsps_NDEReq1],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq1().findContentItem("Details"); }],
        /// <field>
        /// Called after the Get_NDE_Buffer_Det_for_Create content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Get_NDE_Buffer_Det_for_Create_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq1().findContentItem("Get_NDE_Buffer_Det_for_Create"); }],
        /// <field>
        /// Called after the sps_View_Get_NDE_Buff_Det_for_Create content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_NDE_Buff_Det_for_Create_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq1().findContentItem("sps_View_Get_NDE_Buff_Det_for_Create"); }],
        /// <field>
        /// Called after the jointQuery1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        jointQuery1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq1().findContentItem("jointQuery1"); }],
        /// <field>
        /// Called after the jointQuery1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        jointQuery1Template_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq1().findContentItem("jointQuery1Template"); }],
        /// <field>
        /// Called after the Joint_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq1().findContentItem("Joint_No"); }],
        /// <field>
        /// Called after the ShowAddEditsps_NDEReq1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowAddEditsps_NDEReq1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq1().findContentItem("ShowAddEditsps_NDEReq1"); }]
    });

    lightSwitchApplication.AddEditsps_WVF1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_WVF1
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.AddEditsps_WVF1,
            value: lightSwitchApplication.AddEditsps_WVF1
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.AddEditsps_WVF1,
            value: lightSwitchApplication.sps_WVF
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.sps_WVF,
            value: Date
        },
        ToDate: {
            _$class: msls.ContentItem,
            _$name: "ToDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.sps_WVF,
            value: Date
        },
        GetWVFForDelete: {
            _$class: msls.ContentItem,
            _$name: "GetWVFForDelete",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.sps_WVF,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditsps_WVF1,
                _$entry: {
                    elementType: lightSwitchApplication.sps_View_Get_WVFListForDelete
                }
            }
        },
        GetWVFForDeleteTemplate: {
            _$class: msls.ContentItem,
            _$name: "GetWVFForDeleteTemplate",
            _$parentName: "GetWVFForDelete",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.sps_View_Get_WVFListForDelete,
            value: lightSwitchApplication.sps_View_Get_WVFListForDelete
        },
        WVF_No: {
            _$class: msls.ContentItem,
            _$name: "WVF_No",
            _$parentName: "GetWVFForDeleteTemplate",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.sps_View_Get_WVFListForDelete,
            value: String
        },
        WVF_Date: {
            _$class: msls.ContentItem,
            _$name: "WVF_Date",
            _$parentName: "GetWVFForDeleteTemplate",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.sps_View_Get_WVFListForDelete,
            value: Date
        },
        c_Module: {
            _$class: msls.ContentItem,
            _$name: "c_Module",
            _$parentName: "GetWVFForDeleteTemplate",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.sps_View_Get_WVFListForDelete,
            value: String
        },
        Offer_By: {
            _$class: msls.ContentItem,
            _$name: "Offer_By",
            _$parentName: "GetWVFForDeleteTemplate",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.sps_View_Get_WVFListForDelete,
            value: String
        },
        sps_WVFDetails: {
            _$class: msls.ContentItem,
            _$name: "sps_WVFDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.AddEditsps_WVF1,
            value: lightSwitchApplication.AddEditsps_WVF1
        },
        sps_WVFDetails1: {
            _$class: msls.ContentItem,
            _$name: "sps_WVFDetails1",
            _$parentName: "sps_WVFDetails",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.AddEditsps_WVF1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditsps_WVF1,
                _$entry: {
                    elementType: lightSwitchApplication.sps_WVFDetail
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "sps_WVFDetails1",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_WVFDetail
        },
        WVF_No_l2_WVF: {
            _$class: msls.ContentItem,
            _$name: "WVF_No_l2_WVF",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.sps_WVFDetail,
            value: String
        },
        FTU_No_l2_FTU: {
            _$class: msls.ContentItem,
            _$name: "FTU_No_l2_FTU",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.sps_WVFDetail,
            value: String
        },
        Joint_ID_l2_Joints: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID_l2_Joints",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_WVF1,
            data: lightSwitchApplication.sps_WVFDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_WVF1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditsps_WVF1, {
        /// <field>
        /// Called when a new AddEditsps_WVF1 screen is created.
        /// <br/>created(msls.application.AddEditsps_WVF1 screen)
        /// </field>
        created: [lightSwitchApplication.AddEditsps_WVF1],
        /// <field>
        /// Called before changes on an active AddEditsps_WVF1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditsps_WVF1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditsps_WVF1],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("columns"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the ToDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ToDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("ToDate"); }],
        /// <field>
        /// Called after the GetWVFForDelete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GetWVFForDelete_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("GetWVFForDelete"); }],
        /// <field>
        /// Called after the GetWVFForDeleteTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GetWVFForDeleteTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("GetWVFForDeleteTemplate"); }],
        /// <field>
        /// Called after the WVF_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVF_No_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("WVF_No"); }],
        /// <field>
        /// Called after the WVF_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVF_Date_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("WVF_Date"); }],
        /// <field>
        /// Called after the c_Module content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Module_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("c_Module"); }],
        /// <field>
        /// Called after the Offer_By content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Offer_By_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("Offer_By"); }],
        /// <field>
        /// Called after the sps_WVFDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_WVFDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("sps_WVFDetails"); }],
        /// <field>
        /// Called after the sps_WVFDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_WVFDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("sps_WVFDetails1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("rows"); }],
        /// <field>
        /// Called after the WVF_No_l2_WVF content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVF_No_l2_WVF_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("WVF_No_l2_WVF"); }],
        /// <field>
        /// Called after the FTU_No_l2_FTU content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FTU_No_l2_FTU_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("FTU_No_l2_FTU"); }],
        /// <field>
        /// Called after the Joint_ID_l2_Joints content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID_l2_Joints_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF1().findContentItem("Joint_ID_l2_Joints"); }]
    });

    lightSwitchApplication.WVFDelete.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.WVFDelete
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.WVFDelete,
            value: lightSwitchApplication.WVFDelete
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.WVFDelete,
            value: lightSwitchApplication.WVFDelete
        },
        WVFForDelete: {
            _$class: msls.ContentItem,
            _$name: "WVFForDelete",
            _$parentName: "Group",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.WVFDelete,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.WVFDelete,
                _$entry: {
                    elementType: lightSwitchApplication.sps_View_Get_WVF_For_Delete
                }
            }
        },
        WVFForDeleteTemplate: {
            _$class: msls.ContentItem,
            _$name: "WVFForDeleteTemplate",
            _$parentName: "WVFForDelete",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: lightSwitchApplication.sps_View_Get_WVF_For_Delete
        },
        Module_Name: {
            _$class: msls.ContentItem,
            _$name: "Module_Name",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Offer_By: {
            _$class: msls.ContentItem,
            _$name: "Offer_By",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        WVF_Date: {
            _$class: msls.ContentItem,
            _$name: "WVF_Date",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: Date
        },
        WVF_No: {
            _$class: msls.ContentItem,
            _$name: "WVF_No",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        DrgNo: {
            _$class: msls.ContentItem,
            _$name: "DrgNo",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Joint_ID: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Joint_No: {
            _$class: msls.ContentItem,
            _$name: "Joint_No",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        WPS_l2_WPS: {
            _$class: msls.ContentItem,
            _$name: "WPS_l2_WPS",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Weld_Process: {
            _$class: msls.ContentItem,
            _$name: "Weld_Process",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Welder1: {
            _$class: msls.ContentItem,
            _$name: "Welder1",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Welder2: {
            _$class: msls.ContentItem,
            _$name: "Welder2",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Welder3: {
            _$class: msls.ContentItem,
            _$name: "Welder3",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Welder4: {
            _$class: msls.ContentItem,
            _$name: "Welder4",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Welder5: {
            _$class: msls.ContentItem,
            _$name: "Welder5",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Welder6: {
            _$class: msls.ContentItem,
            _$name: "Welder6",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Welder7: {
            _$class: msls.ContentItem,
            _$name: "Welder7",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Welder8: {
            _$class: msls.ContentItem,
            _$name: "Welder8",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Welder9: {
            _$class: msls.ContentItem,
            _$name: "Welder9",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Welder10: {
            _$class: msls.ContentItem,
            _$name: "Welder10",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Remark_Det: {
            _$class: msls.ContentItem,
            _$name: "Remark_Det",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        QC_Remark: {
            _$class: msls.ContentItem,
            _$name: "QC_Remark",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        EXEC_Remark: {
            _$class: msls.ContentItem,
            _$name: "EXEC_Remark",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        WVFStatus: {
            _$class: msls.ContentItem,
            _$name: "WVFStatus",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        RTStatus: {
            _$class: msls.ContentItem,
            _$name: "RTStatus",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        UTStatus: {
            _$class: msls.ContentItem,
            _$name: "UTStatus",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        MTStatus: {
            _$class: msls.ContentItem,
            _$name: "MTStatus",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        PTStatus: {
            _$class: msls.ContentItem,
            _$name: "PTStatus",
            _$parentName: "WVFForDeleteTemplate",
            screen: lightSwitchApplication.WVFDelete,
            data: lightSwitchApplication.sps_View_Get_WVF_For_Delete,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.WVFDelete
        }
    };

    msls._addEntryPoints(lightSwitchApplication.WVFDelete, {
        /// <field>
        /// Called when a new WVFDelete screen is created.
        /// <br/>created(msls.application.WVFDelete screen)
        /// </field>
        created: [lightSwitchApplication.WVFDelete],
        /// <field>
        /// Called before changes on an active WVFDelete screen are applied.
        /// <br/>beforeApplyChanges(msls.application.WVFDelete screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.WVFDelete],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Details"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Group"); }],
        /// <field>
        /// Called after the WVFForDelete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVFForDelete_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("WVFForDelete"); }],
        /// <field>
        /// Called after the WVFForDeleteTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVFForDeleteTemplate_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("WVFForDeleteTemplate"); }],
        /// <field>
        /// Called after the Module_Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_Name_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Module_Name"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Location"); }],
        /// <field>
        /// Called after the Offer_By content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Offer_By_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Offer_By"); }],
        /// <field>
        /// Called after the WVF_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVF_Date_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("WVF_Date"); }],
        /// <field>
        /// Called after the WVF_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVF_No_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("WVF_No"); }],
        /// <field>
        /// Called after the DrgNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DrgNo_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("DrgNo"); }],
        /// <field>
        /// Called after the Joint_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Joint_ID"); }],
        /// <field>
        /// Called after the Joint_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Joint_No"); }],
        /// <field>
        /// Called after the WPS_l2_WPS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WPS_l2_WPS_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("WPS_l2_WPS"); }],
        /// <field>
        /// Called after the Weld_Process content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Weld_Process_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Weld_Process"); }],
        /// <field>
        /// Called after the Welder1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder1_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Welder1"); }],
        /// <field>
        /// Called after the Welder2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder2_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Welder2"); }],
        /// <field>
        /// Called after the Welder3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder3_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Welder3"); }],
        /// <field>
        /// Called after the Welder4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder4_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Welder4"); }],
        /// <field>
        /// Called after the Welder5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder5_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Welder5"); }],
        /// <field>
        /// Called after the Welder6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder6_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Welder6"); }],
        /// <field>
        /// Called after the Welder7 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder7_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Welder7"); }],
        /// <field>
        /// Called after the Welder8 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder8_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Welder8"); }],
        /// <field>
        /// Called after the Welder9 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder9_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Welder9"); }],
        /// <field>
        /// Called after the Welder10 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder10_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Welder10"); }],
        /// <field>
        /// Called after the Remark_Det content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_Det_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("Remark_Det"); }],
        /// <field>
        /// Called after the QC_Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QC_Remark_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("QC_Remark"); }],
        /// <field>
        /// Called after the EXEC_Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EXEC_Remark_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("EXEC_Remark"); }],
        /// <field>
        /// Called after the WVFStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVFStatus_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("WVFStatus"); }],
        /// <field>
        /// Called after the RTStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RTStatus_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("RTStatus"); }],
        /// <field>
        /// Called after the UTStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UTStatus_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("UTStatus"); }],
        /// <field>
        /// Called after the MTStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MTStatus_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("MTStatus"); }],
        /// <field>
        /// Called after the PTStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PTStatus_postRender: [$element, function () { return new lightSwitchApplication.WVFDelete().findContentItem("PTStatus"); }]
    });

    lightSwitchApplication.AddEdit_Hardness_Report.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEdit_Hardness_Report
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.AddEdit_Hardness_Report,
            value: lightSwitchApplication.AddEdit_Hardness_Report
        },
        Hardness_Offer_get: {
            _$class: msls.ContentItem,
            _$name: "Hardness_Offer_get",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.AddEdit_Hardness_Report,
            value: lightSwitchApplication.Hardness_offer_get
        },
        Hardness_offer_get1: {
            _$class: msls.ContentItem,
            _$name: "Hardness_offer_get1",
            _$parentName: "Hardness_Offer_get",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: lightSwitchApplication.Hardness_offer_get
        },
        Module_ID: {
            _$class: msls.ContentItem,
            _$name: "Module_ID",
            _$parentName: "Hardness_offer_get1",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: String
        },
        Drg_ID: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID",
            _$parentName: "Hardness_offer_get1",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: String
        },
        Drg_ID_l2_DrgList: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_l2_DrgList",
            _$parentName: "Hardness_offer_get1",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: String
        },
        Joint_ID: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID",
            _$parentName: "Hardness_offer_get1",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: String
        },
        Rev: {
            _$class: msls.ContentItem,
            _$name: "Rev",
            _$parentName: "Hardness_offer_get1",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: String
        },
        Joint_No: {
            _$class: msls.ContentItem,
            _$name: "Joint_No",
            _$parentName: "Hardness_offer_get1",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: String
        },
        hardness_query: {
            _$class: msls.ContentItem,
            _$name: "hardness_query",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.AddEdit_Hardness_Report,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEdit_Hardness_Report,
                _$entry: {
                    elementType: lightSwitchApplication.Hardness_offer_get
                }
            }
        },
        hardness_queryTemplate: {
            _$class: msls.ContentItem,
            _$name: "hardness_queryTemplate",
            _$parentName: "hardness_query",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: lightSwitchApplication.Hardness_offer_get
        },
        Module_ID2: {
            _$class: msls.ContentItem,
            _$name: "Module_ID2",
            _$parentName: "hardness_queryTemplate",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: String
        },
        Drg_ID1: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID1",
            _$parentName: "hardness_queryTemplate",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: String
        },
        Drg_ID_l2_DrgList1: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_l2_DrgList1",
            _$parentName: "hardness_queryTemplate",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: String
        },
        Joint_ID1: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID1",
            _$parentName: "hardness_queryTemplate",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: String
        },
        Rev1: {
            _$class: msls.ContentItem,
            _$name: "Rev1",
            _$parentName: "hardness_queryTemplate",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: String
        },
        Joint_No2: {
            _$class: msls.ContentItem,
            _$name: "Joint_No2",
            _$parentName: "hardness_queryTemplate",
            screen: lightSwitchApplication.AddEdit_Hardness_Report,
            data: lightSwitchApplication.Hardness_offer_get,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEdit_Hardness_Report
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEdit_Hardness_Report, {
        /// <field>
        /// Called when a new AddEdit_Hardness_Report screen is created.
        /// <br/>created(msls.application.AddEdit_Hardness_Report screen)
        /// </field>
        created: [lightSwitchApplication.AddEdit_Hardness_Report],
        /// <field>
        /// Called before changes on an active AddEdit_Hardness_Report screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEdit_Hardness_Report screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEdit_Hardness_Report],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Details"); }],
        /// <field>
        /// Called after the Hardness_Offer_get content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hardness_Offer_get_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Hardness_Offer_get"); }],
        /// <field>
        /// Called after the Hardness_offer_get1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hardness_offer_get1_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Hardness_offer_get1"); }],
        /// <field>
        /// Called after the Module_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Module_ID"); }],
        /// <field>
        /// Called after the Drg_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Drg_ID"); }],
        /// <field>
        /// Called after the Drg_ID_l2_DrgList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_l2_DrgList_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Drg_ID_l2_DrgList"); }],
        /// <field>
        /// Called after the Joint_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Joint_ID"); }],
        /// <field>
        /// Called after the Rev content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Rev_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Rev"); }],
        /// <field>
        /// Called after the Joint_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Joint_No"); }],
        /// <field>
        /// Called after the hardness_query content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        hardness_query_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("hardness_query"); }],
        /// <field>
        /// Called after the hardness_queryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        hardness_queryTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("hardness_queryTemplate"); }],
        /// <field>
        /// Called after the Module_ID2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID2_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Module_ID2"); }],
        /// <field>
        /// Called after the Drg_ID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID1_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Drg_ID1"); }],
        /// <field>
        /// Called after the Drg_ID_l2_DrgList1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_l2_DrgList1_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Drg_ID_l2_DrgList1"); }],
        /// <field>
        /// Called after the Joint_ID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID1_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Joint_ID1"); }],
        /// <field>
        /// Called after the Rev1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Rev1_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Rev1"); }],
        /// <field>
        /// Called after the Joint_No2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No2_postRender: [$element, function () { return new lightSwitchApplication.AddEdit_Hardness_Report().findContentItem("Joint_No2"); }]
    });

    lightSwitchApplication.Inspect_FITUP1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_FITUP1
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Inspect_FITUP1,
            data: lightSwitchApplication.Inspect_FITUP1,
            value: lightSwitchApplication.Inspect_FITUP1
        },
        Display_Inspect_FITUP: {
            _$class: msls.ContentItem,
            _$name: "Display_Inspect_FITUP",
            _$parentName: "Details",
            screen: lightSwitchApplication.Inspect_FITUP1,
            data: lightSwitchApplication.Inspect_FITUP1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Inspect_FITUP1,
                _$entry: {
                    elementType: lightSwitchApplication.FITUP_ACCEPT_MAIN
                }
            }
        },
        Display_Inspect_FITUPTemplate: {
            _$class: msls.ContentItem,
            _$name: "Display_Inspect_FITUPTemplate",
            _$parentName: "Display_Inspect_FITUP",
            screen: lightSwitchApplication.Inspect_FITUP1,
            data: lightSwitchApplication.FITUP_ACCEPT_MAIN,
            value: lightSwitchApplication.FITUP_ACCEPT_MAIN
        },
        FTU_No: {
            _$class: msls.ContentItem,
            _$name: "FTU_No",
            _$parentName: "Display_Inspect_FITUPTemplate",
            screen: lightSwitchApplication.Inspect_FITUP1,
            data: lightSwitchApplication.FITUP_ACCEPT_MAIN,
            value: String
        },
        FTU_Date: {
            _$class: msls.ContentItem,
            _$name: "FTU_Date",
            _$parentName: "Display_Inspect_FITUPTemplate",
            screen: lightSwitchApplication.Inspect_FITUP1,
            data: lightSwitchApplication.FITUP_ACCEPT_MAIN,
            value: Date
        },
        Insp_PlanDate: {
            _$class: msls.ContentItem,
            _$name: "Insp_PlanDate",
            _$parentName: "Display_Inspect_FITUPTemplate",
            screen: lightSwitchApplication.Inspect_FITUP1,
            data: lightSwitchApplication.FITUP_ACCEPT_MAIN,
            value: Date
        },
        Module_Name: {
            _$class: msls.ContentItem,
            _$name: "Module_Name",
            _$parentName: "Display_Inspect_FITUPTemplate",
            screen: lightSwitchApplication.Inspect_FITUP1,
            data: lightSwitchApplication.FITUP_ACCEPT_MAIN,
            value: String
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "Display_Inspect_FITUPTemplate",
            screen: lightSwitchApplication.Inspect_FITUP1,
            data: lightSwitchApplication.FITUP_ACCEPT_MAIN,
            value: String
        },
        Contractor: {
            _$class: msls.ContentItem,
            _$name: "Contractor",
            _$parentName: "Display_Inspect_FITUPTemplate",
            screen: lightSwitchApplication.Inspect_FITUP1,
            data: lightSwitchApplication.FITUP_ACCEPT_MAIN,
            value: String
        },
        Module_ID: {
            _$class: msls.ContentItem,
            _$name: "Module_ID",
            _$parentName: "Display_Inspect_FITUPTemplate",
            screen: lightSwitchApplication.Inspect_FITUP1,
            data: lightSwitchApplication.FITUP_ACCEPT_MAIN,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_FITUP1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Inspect_FITUP1, {
        /// <field>
        /// Called when a new Inspect_FITUP1 screen is created.
        /// <br/>created(msls.application.Inspect_FITUP1 screen)
        /// </field>
        created: [lightSwitchApplication.Inspect_FITUP1],
        /// <field>
        /// Called before changes on an active Inspect_FITUP1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Inspect_FITUP1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Inspect_FITUP1],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP1().findContentItem("Details"); }],
        /// <field>
        /// Called after the Display_Inspect_FITUP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Display_Inspect_FITUP_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP1().findContentItem("Display_Inspect_FITUP"); }],
        /// <field>
        /// Called after the Display_Inspect_FITUPTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Display_Inspect_FITUPTemplate_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP1().findContentItem("Display_Inspect_FITUPTemplate"); }],
        /// <field>
        /// Called after the FTU_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FTU_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP1().findContentItem("FTU_No"); }],
        /// <field>
        /// Called after the FTU_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FTU_Date_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP1().findContentItem("FTU_Date"); }],
        /// <field>
        /// Called after the Insp_PlanDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Insp_PlanDate_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP1().findContentItem("Insp_PlanDate"); }],
        /// <field>
        /// Called after the Module_Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_Name_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP1().findContentItem("Module_Name"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP1().findContentItem("UserName"); }],
        /// <field>
        /// Called after the Contractor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Contractor_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP1().findContentItem("Contractor"); }],
        /// <field>
        /// Called after the Module_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP1().findContentItem("Module_ID"); }]
    });

    lightSwitchApplication.Inspect_FITUP2.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_FITUP2
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Inspect_FITUP2,
            value: lightSwitchApplication.Inspect_FITUP2
        },
        displayFITUP_QUERY: {
            _$class: msls.ContentItem,
            _$name: "displayFITUP_QUERY",
            _$parentName: "Details",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Inspect_FITUP2,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Inspect_FITUP2,
                _$entry: {
                    elementType: lightSwitchApplication.Get_FTU_For_inspect_closed
                }
            }
        },
        displayFITUP_QUERYTemplate: {
            _$class: msls.ContentItem,
            _$name: "displayFITUP_QUERYTemplate",
            _$parentName: "displayFITUP_QUERY",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: lightSwitchApplication.Get_FTU_For_inspect_closed
        },
        Module_ID: {
            _$class: msls.ContentItem,
            _$name: "Module_ID",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        Drg_ID1: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID1",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        Joint_ID: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        Joint_No: {
            _$class: msls.ContentItem,
            _$name: "Joint_No",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        Part1: {
            _$class: msls.ContentItem,
            _$name: "Part1",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        Part2: {
            _$class: msls.ContentItem,
            _$name: "Part2",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        Part3: {
            _$class: msls.ContentItem,
            _$name: "Part3",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        Part4: {
            _$class: msls.ContentItem,
            _$name: "Part4",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        Part5: {
            _$class: msls.ContentItem,
            _$name: "Part5",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        IMIRNO1: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO1",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        IMIRNO2: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO2",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        IMIRNO3: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO3",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        IMIRNO4: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO4",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        IMIRNO5: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO5",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        IDNO1: {
            _$class: msls.ContentItem,
            _$name: "IDNO1",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        IDNO2: {
            _$class: msls.ContentItem,
            _$name: "IDNO2",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        IDNO3: {
            _$class: msls.ContentItem,
            _$name: "IDNO3",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        IDNO4: {
            _$class: msls.ContentItem,
            _$name: "IDNO4",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        IDNO5: {
            _$class: msls.ContentItem,
            _$name: "IDNO5",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        HeatNo1: {
            _$class: msls.ContentItem,
            _$name: "HeatNo1",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        HeatNo2: {
            _$class: msls.ContentItem,
            _$name: "HeatNo2",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        HeatNo3: {
            _$class: msls.ContentItem,
            _$name: "HeatNo3",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        HeatNo4: {
            _$class: msls.ContentItem,
            _$name: "HeatNo4",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        HeatNo5: {
            _$class: msls.ContentItem,
            _$name: "HeatNo5",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        FTU_No: {
            _$class: msls.ContentItem,
            _$name: "FTU_No",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        EXEC_Remark: {
            _$class: msls.ContentItem,
            _$name: "EXEC_Remark",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        FTU_Date: {
            _$class: msls.ContentItem,
            _$name: "FTU_Date",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: Date
        },
        Offer_By: {
            _$class: msls.ContentItem,
            _$name: "Offer_By",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        Remark_Detail: {
            _$class: msls.ContentItem,
            _$name: "Remark_Detail",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        DCN_No: {
            _$class: msls.ContentItem,
            _$name: "DCN_No",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        WPS: {
            _$class: msls.ContentItem,
            _$name: "WPS",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        Weld_Process: {
            _$class: msls.ContentItem,
            _$name: "Weld_Process",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        RemarkQC: {
            _$class: msls.ContentItem,
            _$name: "RemarkQC",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        Joint_Category: {
            _$class: msls.ContentItem,
            _$name: "Joint_Category",
            _$parentName: "displayFITUP_QUERYTemplate",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Get_FTU_For_inspect_closed,
            value: String
        },
        QCREMARK: {
            _$class: msls.ContentItem,
            _$name: "QCREMARK",
            _$parentName: "Details",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Inspect_FITUP2,
            value: String
        },
        IDOfInstruemntUsed: {
            _$class: msls.ContentItem,
            _$name: "IDOfInstruemntUsed",
            _$parentName: "Details",
            screen: lightSwitchApplication.Inspect_FITUP2,
            data: lightSwitchApplication.Inspect_FITUP2,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_FITUP2
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Inspect_FITUP2, {
        /// <field>
        /// Called when a new Inspect_FITUP2 screen is created.
        /// <br/>created(msls.application.Inspect_FITUP2 screen)
        /// </field>
        created: [lightSwitchApplication.Inspect_FITUP2],
        /// <field>
        /// Called before changes on an active Inspect_FITUP2 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Inspect_FITUP2 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Inspect_FITUP2],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Details"); }],
        /// <field>
        /// Called after the displayFITUP_QUERY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        displayFITUP_QUERY_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("displayFITUP_QUERY"); }],
        /// <field>
        /// Called after the displayFITUP_QUERYTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        displayFITUP_QUERYTemplate_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("displayFITUP_QUERYTemplate"); }],
        /// <field>
        /// Called after the Module_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Module_ID"); }],
        /// <field>
        /// Called after the Drg_ID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID1_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Drg_ID1"); }],
        /// <field>
        /// Called after the Joint_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Joint_ID"); }],
        /// <field>
        /// Called after the Joint_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Joint_No"); }],
        /// <field>
        /// Called after the Part1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part1_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Part1"); }],
        /// <field>
        /// Called after the Part2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part2_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Part2"); }],
        /// <field>
        /// Called after the Part3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part3_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Part3"); }],
        /// <field>
        /// Called after the Part4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part4_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Part4"); }],
        /// <field>
        /// Called after the Part5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part5_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Part5"); }],
        /// <field>
        /// Called after the IMIRNO1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO1_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("IMIRNO1"); }],
        /// <field>
        /// Called after the IMIRNO2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO2_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("IMIRNO2"); }],
        /// <field>
        /// Called after the IMIRNO3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO3_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("IMIRNO3"); }],
        /// <field>
        /// Called after the IMIRNO4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO4_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("IMIRNO4"); }],
        /// <field>
        /// Called after the IMIRNO5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO5_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("IMIRNO5"); }],
        /// <field>
        /// Called after the IDNO1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNO1_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("IDNO1"); }],
        /// <field>
        /// Called after the IDNO2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNO2_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("IDNO2"); }],
        /// <field>
        /// Called after the IDNO3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNO3_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("IDNO3"); }],
        /// <field>
        /// Called after the IDNO4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNO4_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("IDNO4"); }],
        /// <field>
        /// Called after the IDNO5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNO5_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("IDNO5"); }],
        /// <field>
        /// Called after the HeatNo1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo1_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("HeatNo1"); }],
        /// <field>
        /// Called after the HeatNo2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo2_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("HeatNo2"); }],
        /// <field>
        /// Called after the HeatNo3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo3_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("HeatNo3"); }],
        /// <field>
        /// Called after the HeatNo4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo4_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("HeatNo4"); }],
        /// <field>
        /// Called after the HeatNo5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo5_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("HeatNo5"); }],
        /// <field>
        /// Called after the FTU_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FTU_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("FTU_No"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Location"); }],
        /// <field>
        /// Called after the EXEC_Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EXEC_Remark_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("EXEC_Remark"); }],
        /// <field>
        /// Called after the FTU_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FTU_Date_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("FTU_Date"); }],
        /// <field>
        /// Called after the Offer_By content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Offer_By_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Offer_By"); }],
        /// <field>
        /// Called after the Remark_Detail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_Detail_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Remark_Detail"); }],
        /// <field>
        /// Called after the DCN_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DCN_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("DCN_No"); }],
        /// <field>
        /// Called after the WPS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WPS_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("WPS"); }],
        /// <field>
        /// Called after the Weld_Process content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Weld_Process_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Weld_Process"); }],
        /// <field>
        /// Called after the RemarkQC content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RemarkQC_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("RemarkQC"); }],
        /// <field>
        /// Called after the Joint_Category content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_Category_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("Joint_Category"); }],
        /// <field>
        /// Called after the QCREMARK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QCREMARK_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("QCREMARK"); }],
        /// <field>
        /// Called after the IDOfInstruemntUsed content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDOfInstruemntUsed_postRender: [$element, function () { return new lightSwitchApplication.Inspect_FITUP2().findContentItem("IDOfInstruemntUsed"); }]
    });

    lightSwitchApplication.Inspect_MI1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_MI1
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Inspect_MI1,
            data: lightSwitchApplication.Inspect_MI1,
            value: lightSwitchApplication.Inspect_MI1
        },
        Inspect_MIquery: {
            _$class: msls.ContentItem,
            _$name: "Inspect_MIquery",
            _$parentName: "Details",
            screen: lightSwitchApplication.Inspect_MI1,
            data: lightSwitchApplication.Inspect_MI1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Inspect_MI1,
                _$entry: {
                    elementType: lightSwitchApplication.GET_MPI_INSPECT
                }
            }
        },
        Inspect_MIqueryTemplate: {
            _$class: msls.ContentItem,
            _$name: "Inspect_MIqueryTemplate",
            _$parentName: "Inspect_MIquery",
            screen: lightSwitchApplication.Inspect_MI1,
            data: lightSwitchApplication.GET_MPI_INSPECT,
            value: lightSwitchApplication.GET_MPI_INSPECT
        },
        MPI_No: {
            _$class: msls.ContentItem,
            _$name: "MPI_No",
            _$parentName: "Inspect_MIqueryTemplate",
            screen: lightSwitchApplication.Inspect_MI1,
            data: lightSwitchApplication.GET_MPI_INSPECT,
            value: String
        },
        MPI_Date: {
            _$class: msls.ContentItem,
            _$name: "MPI_Date",
            _$parentName: "Inspect_MIqueryTemplate",
            screen: lightSwitchApplication.Inspect_MI1,
            data: lightSwitchApplication.GET_MPI_INSPECT,
            value: Date
        },
        Insp_PlanDate: {
            _$class: msls.ContentItem,
            _$name: "Insp_PlanDate",
            _$parentName: "Inspect_MIqueryTemplate",
            screen: lightSwitchApplication.Inspect_MI1,
            data: lightSwitchApplication.GET_MPI_INSPECT,
            value: Date
        },
        Module_ID_l2_Module: {
            _$class: msls.ContentItem,
            _$name: "Module_ID_l2_Module",
            _$parentName: "Inspect_MIqueryTemplate",
            screen: lightSwitchApplication.Inspect_MI1,
            data: lightSwitchApplication.GET_MPI_INSPECT,
            value: String
        },
        Module_Name: {
            _$class: msls.ContentItem,
            _$name: "Module_Name",
            _$parentName: "Inspect_MIqueryTemplate",
            screen: lightSwitchApplication.Inspect_MI1,
            data: lightSwitchApplication.GET_MPI_INSPECT,
            value: String
        },
        Offer_By: {
            _$class: msls.ContentItem,
            _$name: "Offer_By",
            _$parentName: "Inspect_MIqueryTemplate",
            screen: lightSwitchApplication.Inspect_MI1,
            data: lightSwitchApplication.GET_MPI_INSPECT,
            value: String
        },
        Contractor: {
            _$class: msls.ContentItem,
            _$name: "Contractor",
            _$parentName: "Inspect_MIqueryTemplate",
            screen: lightSwitchApplication.Inspect_MI1,
            data: lightSwitchApplication.GET_MPI_INSPECT,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_MI1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Inspect_MI1, {
        /// <field>
        /// Called when a new Inspect_MI1 screen is created.
        /// <br/>created(msls.application.Inspect_MI1 screen)
        /// </field>
        created: [lightSwitchApplication.Inspect_MI1],
        /// <field>
        /// Called before changes on an active Inspect_MI1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Inspect_MI1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Inspect_MI1],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI1().findContentItem("Details"); }],
        /// <field>
        /// Called after the Inspect_MIquery content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Inspect_MIquery_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI1().findContentItem("Inspect_MIquery"); }],
        /// <field>
        /// Called after the Inspect_MIqueryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Inspect_MIqueryTemplate_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI1().findContentItem("Inspect_MIqueryTemplate"); }],
        /// <field>
        /// Called after the MPI_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MPI_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI1().findContentItem("MPI_No"); }],
        /// <field>
        /// Called after the MPI_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MPI_Date_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI1().findContentItem("MPI_Date"); }],
        /// <field>
        /// Called after the Insp_PlanDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Insp_PlanDate_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI1().findContentItem("Insp_PlanDate"); }],
        /// <field>
        /// Called after the Module_ID_l2_Module content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID_l2_Module_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI1().findContentItem("Module_ID_l2_Module"); }],
        /// <field>
        /// Called after the Module_Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_Name_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI1().findContentItem("Module_Name"); }],
        /// <field>
        /// Called after the Offer_By content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Offer_By_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI1().findContentItem("Offer_By"); }],
        /// <field>
        /// Called after the Contractor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Contractor_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI1().findContentItem("Contractor"); }]
    });

    lightSwitchApplication.Inspect_MI2.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_MI2
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.Inspect_MI2,
            value: lightSwitchApplication.Inspect_MI2
        },
        QC_Inspect_MPT_Query: {
            _$class: msls.ContentItem,
            _$name: "QC_Inspect_MPT_Query",
            _$parentName: "Details",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.Inspect_MI2,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Inspect_MI2,
                _$entry: {
                    elementType: lightSwitchApplication.GET_QC_INSPECT_MPI
                }
            }
        },
        QC_Inspect_MPT_QueryTemplate: {
            _$class: msls.ContentItem,
            _$name: "QC_Inspect_MPT_QueryTemplate",
            _$parentName: "QC_Inspect_MPT_Query",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: lightSwitchApplication.GET_QC_INSPECT_MPI
        },
        Module_Name: {
            _$class: msls.ContentItem,
            _$name: "Module_Name",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Module_ID: {
            _$class: msls.ContentItem,
            _$name: "Module_ID",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Contractor_Name: {
            _$class: msls.ContentItem,
            _$name: "Contractor_Name",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Contractor_ID: {
            _$class: msls.ContentItem,
            _$name: "Contractor_ID",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Sr_No: {
            _$class: msls.ContentItem,
            _$name: "Sr_No",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Drg_ID_l2_DrgList: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_l2_DrgList",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Drg_ID_l2_DrgList1: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_l2_DrgList1",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        RevID: {
            _$class: msls.ContentItem,
            _$name: "RevID",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        DCN_No: {
            _$class: msls.ContentItem,
            _$name: "DCN_No",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        PARTNO: {
            _$class: msls.ContentItem,
            _$name: "PARTNO",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Qty_Offer: {
            _$class: msls.ContentItem,
            _$name: "Qty_Offer",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Remark_Off_Det: {
            _$class: msls.ContentItem,
            _$name: "Remark_Off_Det",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Qty_Req: {
            _$class: msls.ContentItem,
            _$name: "Qty_Req",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Acc_Qty: {
            _$class: msls.ContentItem,
            _$name: "Acc_Qty",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Stock: {
            _$class: msls.ContentItem,
            _$name: "Stock",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Mat_Desc: {
            _$class: msls.ContentItem,
            _$name: "Mat_Desc",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Material: {
            _$class: msls.ContentItem,
            _$name: "Material",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Size_Desc: {
            _$class: msls.ContentItem,
            _$name: "Size_Desc",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Offer_By: {
            _$class: msls.ContentItem,
            _$name: "Offer_By",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        QTYaccepted: {
            _$class: msls.ContentItem,
            _$name: "QTYaccepted",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: Boolean
        },
        MPI_Date: {
            _$class: msls.ContentItem,
            _$name: "MPI_Date",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: Date
        },
        IMIRNO: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        IDNO: {
            _$class: msls.ContentItem,
            _$name: "IDNO",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        HeatNo: {
            _$class: msls.ContentItem,
            _$name: "HeatNo",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        MPI_No: {
            _$class: msls.ContentItem,
            _$name: "MPI_No",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        Remark: {
            _$class: msls.ContentItem,
            _$name: "Remark",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        QCremark: {
            _$class: msls.ContentItem,
            _$name: "QCremark",
            _$parentName: "QC_Inspect_MPT_QueryTemplate",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.GET_QC_INSPECT_MPI,
            value: String
        },
        REMARK1: {
            _$class: msls.ContentItem,
            _$name: "REMARK1",
            _$parentName: "Details",
            screen: lightSwitchApplication.Inspect_MI2,
            data: lightSwitchApplication.Inspect_MI2,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_MI2
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Inspect_MI2, {
        /// <field>
        /// Called when a new Inspect_MI2 screen is created.
        /// <br/>created(msls.application.Inspect_MI2 screen)
        /// </field>
        created: [lightSwitchApplication.Inspect_MI2],
        /// <field>
        /// Called before changes on an active Inspect_MI2 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Inspect_MI2 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Inspect_MI2],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Details"); }],
        /// <field>
        /// Called after the QC_Inspect_MPT_Query content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QC_Inspect_MPT_Query_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("QC_Inspect_MPT_Query"); }],
        /// <field>
        /// Called after the QC_Inspect_MPT_QueryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QC_Inspect_MPT_QueryTemplate_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("QC_Inspect_MPT_QueryTemplate"); }],
        /// <field>
        /// Called after the Module_Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_Name_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Module_Name"); }],
        /// <field>
        /// Called after the Module_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Module_ID"); }],
        /// <field>
        /// Called after the Contractor_Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Contractor_Name_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Contractor_Name"); }],
        /// <field>
        /// Called after the Contractor_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Contractor_ID_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Contractor_ID"); }],
        /// <field>
        /// Called after the Sr_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Sr_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Sr_No"); }],
        /// <field>
        /// Called after the Drg_ID_l2_DrgList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_l2_DrgList_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Drg_ID_l2_DrgList"); }],
        /// <field>
        /// Called after the Drg_ID_l2_DrgList1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_l2_DrgList1_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Drg_ID_l2_DrgList1"); }],
        /// <field>
        /// Called after the RevID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RevID_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("RevID"); }],
        /// <field>
        /// Called after the DCN_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DCN_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("DCN_No"); }],
        /// <field>
        /// Called after the PARTNO content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PARTNO_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("PARTNO"); }],
        /// <field>
        /// Called after the Qty_Offer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Qty_Offer_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Qty_Offer"); }],
        /// <field>
        /// Called after the Remark_Off_Det content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_Off_Det_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Remark_Off_Det"); }],
        /// <field>
        /// Called after the Qty_Req content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Qty_Req_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Qty_Req"); }],
        /// <field>
        /// Called after the Acc_Qty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Acc_Qty_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Acc_Qty"); }],
        /// <field>
        /// Called after the Stock content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Stock_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Stock"); }],
        /// <field>
        /// Called after the Mat_Desc content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Mat_Desc_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Mat_Desc"); }],
        /// <field>
        /// Called after the Material content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Material"); }],
        /// <field>
        /// Called after the Size_Desc content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Size_Desc_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Size_Desc"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Location"); }],
        /// <field>
        /// Called after the Offer_By content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Offer_By_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Offer_By"); }],
        /// <field>
        /// Called after the QTYaccepted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QTYaccepted_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("QTYaccepted"); }],
        /// <field>
        /// Called after the MPI_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MPI_Date_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("MPI_Date"); }],
        /// <field>
        /// Called after the IMIRNO content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("IMIRNO"); }],
        /// <field>
        /// Called after the IDNO content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNO_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("IDNO"); }],
        /// <field>
        /// Called after the HeatNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("HeatNo"); }],
        /// <field>
        /// Called after the MPI_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MPI_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("MPI_No"); }],
        /// <field>
        /// Called after the Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("Remark"); }],
        /// <field>
        /// Called after the QCremark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QCremark_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("QCremark"); }],
        /// <field>
        /// Called after the REMARK1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REMARK1_postRender: [$element, function () { return new lightSwitchApplication.Inspect_MI2().findContentItem("REMARK1"); }]
    });

    lightSwitchApplication.Inspect_PWHT1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_PWHT1
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Inspect_PWHT1,
            data: lightSwitchApplication.Inspect_PWHT1,
            value: lightSwitchApplication.Inspect_PWHT1
        },
        GET_PWHT_INSPECTQUery: {
            _$class: msls.ContentItem,
            _$name: "GET_PWHT_INSPECTQUery",
            _$parentName: "Details",
            screen: lightSwitchApplication.Inspect_PWHT1,
            data: lightSwitchApplication.Inspect_PWHT1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Inspect_PWHT1,
                _$entry: {
                    elementType: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT
                }
            }
        },
        GET_PWHT_INSPECTQUeryTemplate: {
            _$class: msls.ContentItem,
            _$name: "GET_PWHT_INSPECTQUeryTemplate",
            _$parentName: "GET_PWHT_INSPECTQUery",
            screen: lightSwitchApplication.Inspect_PWHT1,
            data: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT,
            value: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT
        },
        PWHT_No: {
            _$class: msls.ContentItem,
            _$name: "PWHT_No",
            _$parentName: "GET_PWHT_INSPECTQUeryTemplate",
            screen: lightSwitchApplication.Inspect_PWHT1,
            data: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT,
            value: String
        },
        DrgNo: {
            _$class: msls.ContentItem,
            _$name: "DrgNo",
            _$parentName: "GET_PWHT_INSPECTQUeryTemplate",
            screen: lightSwitchApplication.Inspect_PWHT1,
            data: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT,
            value: String
        },
        Joint_ID: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID",
            _$parentName: "GET_PWHT_INSPECTQUeryTemplate",
            screen: lightSwitchApplication.Inspect_PWHT1,
            data: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT,
            value: String
        },
        Joint_No: {
            _$class: msls.ContentItem,
            _$name: "Joint_No",
            _$parentName: "GET_PWHT_INSPECTQUeryTemplate",
            screen: lightSwitchApplication.Inspect_PWHT1,
            data: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT,
            value: String
        },
        PWHT_Date: {
            _$class: msls.ContentItem,
            _$name: "PWHT_Date",
            _$parentName: "GET_PWHT_INSPECTQUeryTemplate",
            screen: lightSwitchApplication.Inspect_PWHT1,
            data: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT,
            value: Date
        },
        Authorize_date: {
            _$class: msls.ContentItem,
            _$name: "Authorize_date",
            _$parentName: "GET_PWHT_INSPECTQUeryTemplate",
            screen: lightSwitchApplication.Inspect_PWHT1,
            data: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT,
            value: Date
        },
        Authorize_By: {
            _$class: msls.ContentItem,
            _$name: "Authorize_By",
            _$parentName: "GET_PWHT_INSPECTQUeryTemplate",
            screen: lightSwitchApplication.Inspect_PWHT1,
            data: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT,
            value: String
        },
        Module_Name: {
            _$class: msls.ContentItem,
            _$name: "Module_Name",
            _$parentName: "GET_PWHT_INSPECTQUeryTemplate",
            screen: lightSwitchApplication.Inspect_PWHT1,
            data: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT,
            value: String
        },
        Module_ID: {
            _$class: msls.ContentItem,
            _$name: "Module_ID",
            _$parentName: "GET_PWHT_INSPECTQUeryTemplate",
            screen: lightSwitchApplication.Inspect_PWHT1,
            data: lightSwitchApplication.GET_PWHT_INSPECT_ACCEPT,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_PWHT1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Inspect_PWHT1, {
        /// <field>
        /// Called when a new Inspect_PWHT1 screen is created.
        /// <br/>created(msls.application.Inspect_PWHT1 screen)
        /// </field>
        created: [lightSwitchApplication.Inspect_PWHT1],
        /// <field>
        /// Called before changes on an active Inspect_PWHT1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Inspect_PWHT1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Inspect_PWHT1],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT1().findContentItem("Details"); }],
        /// <field>
        /// Called after the GET_PWHT_INSPECTQUery content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GET_PWHT_INSPECTQUery_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT1().findContentItem("GET_PWHT_INSPECTQUery"); }],
        /// <field>
        /// Called after the GET_PWHT_INSPECTQUeryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GET_PWHT_INSPECTQUeryTemplate_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT1().findContentItem("GET_PWHT_INSPECTQUeryTemplate"); }],
        /// <field>
        /// Called after the PWHT_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PWHT_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT1().findContentItem("PWHT_No"); }],
        /// <field>
        /// Called after the DrgNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DrgNo_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT1().findContentItem("DrgNo"); }],
        /// <field>
        /// Called after the Joint_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT1().findContentItem("Joint_ID"); }],
        /// <field>
        /// Called after the Joint_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT1().findContentItem("Joint_No"); }],
        /// <field>
        /// Called after the PWHT_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PWHT_Date_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT1().findContentItem("PWHT_Date"); }],
        /// <field>
        /// Called after the Authorize_date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Authorize_date_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT1().findContentItem("Authorize_date"); }],
        /// <field>
        /// Called after the Authorize_By content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Authorize_By_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT1().findContentItem("Authorize_By"); }],
        /// <field>
        /// Called after the Module_Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_Name_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT1().findContentItem("Module_Name"); }],
        /// <field>
        /// Called after the Module_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT1().findContentItem("Module_ID"); }]
    });

    lightSwitchApplication.Inspect_PWHT2.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_PWHT2
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: lightSwitchApplication.Inspect_PWHT2
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: lightSwitchApplication.Inspect_PWHT2
        },
        ProcedureProperty: {
            _$class: msls.ContentItem,
            _$name: "ProcedureProperty",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: lightSwitchApplication.sps_Master_Proceduer
        },
        sps_Master_Proceduer: {
            _$class: msls.ContentItem,
            _$name: "sps_Master_Proceduer",
            _$parentName: "ProcedureProperty",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.sps_Master_Proceduer,
            value: lightSwitchApplication.sps_Master_Proceduer
        },
        Procedures: {
            _$class: msls.ContentItem,
            _$name: "Procedures",
            _$parentName: "sps_Master_Proceduer",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.sps_Master_Proceduer,
            value: String
        },
        CodeOfConstProperty: {
            _$class: msls.ContentItem,
            _$name: "CodeOfConstProperty",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: lightSwitchApplication.sps_Matser_CodeOfConstruction
        },
        sps_Matser_CodeOfConstruction: {
            _$class: msls.ContentItem,
            _$name: "sps_Matser_CodeOfConstruction",
            _$parentName: "CodeOfConstProperty",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.sps_Matser_CodeOfConstruction,
            value: lightSwitchApplication.sps_Matser_CodeOfConstruction
        },
        Code_Of_Construction: {
            _$class: msls.ContentItem,
            _$name: "Code_Of_Construction",
            _$parentName: "sps_Matser_CodeOfConstruction",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.sps_Matser_CodeOfConstruction,
            value: String
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: lightSwitchApplication.Inspect_PWHT2
        },
        LoadingTemp: {
            _$class: msls.ContentItem,
            _$name: "LoadingTemp",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: String
        },
        RateOFheating: {
            _$class: msls.ContentItem,
            _$name: "RateOFheating",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: String
        },
        soakingTemp: {
            _$class: msls.ContentItem,
            _$name: "soakingTemp",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: String
        },
        soakingPeriod: {
            _$class: msls.ContentItem,
            _$name: "soakingPeriod",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: String
        },
        RateOFcooling: {
            _$class: msls.ContentItem,
            _$name: "RateOFcooling",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: String
        },
        unloadingTemp: {
            _$class: msls.ContentItem,
            _$name: "unloadingTemp",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: String
        },
        TEMPRECORDSRNOVALIDITY: {
            _$class: msls.ContentItem,
            _$name: "TEMPRECORDSRNOVALIDITY",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: String
        },
        TEMPERATURERECORDERVALIDITY: {
            _$class: msls.ContentItem,
            _$name: "TEMPERATURERECORDERVALIDITY",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: Date
        },
        THERMOCOUPLENOVALIDITY: {
            _$class: msls.ContentItem,
            _$name: "THERMOCOUPLENOVALIDITY",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: String
        },
        THERMOCOUPLEVALIDITY: {
            _$class: msls.ContentItem,
            _$name: "THERMOCOUPLEVALIDITY",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: Date
        },
        CHARTSPEED: {
            _$class: msls.ContentItem,
            _$name: "CHARTSPEED",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: String
        },
        CHARTNO: {
            _$class: msls.ContentItem,
            _$name: "CHARTNO",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: String
        },
        STARTINGTIMEDATE: {
            _$class: msls.ContentItem,
            _$name: "STARTINGTIMEDATE",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: Date
        },
        ENDINGTIMEDATE: {
            _$class: msls.ContentItem,
            _$name: "ENDINGTIMEDATE",
            _$parentName: "Group",
            screen: lightSwitchApplication.Inspect_PWHT2,
            data: lightSwitchApplication.Inspect_PWHT2,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_PWHT2
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Inspect_PWHT2, {
        /// <field>
        /// Called when a new Inspect_PWHT2 screen is created.
        /// <br/>created(msls.application.Inspect_PWHT2 screen)
        /// </field>
        created: [lightSwitchApplication.Inspect_PWHT2],
        /// <field>
        /// Called before changes on an active Inspect_PWHT2 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Inspect_PWHT2 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Inspect_PWHT2],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("Details"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("Group"); }],
        /// <field>
        /// Called after the ProcedureProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProcedureProperty_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("ProcedureProperty"); }],
        /// <field>
        /// Called after the sps_Master_Proceduer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_Master_Proceduer_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("sps_Master_Proceduer"); }],
        /// <field>
        /// Called after the Procedures content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Procedures_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("Procedures"); }],
        /// <field>
        /// Called after the CodeOfConstProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CodeOfConstProperty_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("CodeOfConstProperty"); }],
        /// <field>
        /// Called after the sps_Matser_CodeOfConstruction content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_Matser_CodeOfConstruction_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("sps_Matser_CodeOfConstruction"); }],
        /// <field>
        /// Called after the Code_Of_Construction content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Code_Of_Construction_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("Code_Of_Construction"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("Group1"); }],
        /// <field>
        /// Called after the LoadingTemp content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LoadingTemp_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("LoadingTemp"); }],
        /// <field>
        /// Called after the RateOFheating content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RateOFheating_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("RateOFheating"); }],
        /// <field>
        /// Called after the soakingTemp content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        soakingTemp_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("soakingTemp"); }],
        /// <field>
        /// Called after the soakingPeriod content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        soakingPeriod_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("soakingPeriod"); }],
        /// <field>
        /// Called after the RateOFcooling content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RateOFcooling_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("RateOFcooling"); }],
        /// <field>
        /// Called after the unloadingTemp content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        unloadingTemp_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("unloadingTemp"); }],
        /// <field>
        /// Called after the TEMPRECORDSRNOVALIDITY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TEMPRECORDSRNOVALIDITY_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("TEMPRECORDSRNOVALIDITY"); }],
        /// <field>
        /// Called after the TEMPERATURERECORDERVALIDITY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TEMPERATURERECORDERVALIDITY_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("TEMPERATURERECORDERVALIDITY"); }],
        /// <field>
        /// Called after the THERMOCOUPLENOVALIDITY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        THERMOCOUPLENOVALIDITY_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("THERMOCOUPLENOVALIDITY"); }],
        /// <field>
        /// Called after the THERMOCOUPLEVALIDITY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        THERMOCOUPLEVALIDITY_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("THERMOCOUPLEVALIDITY"); }],
        /// <field>
        /// Called after the CHARTSPEED content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CHARTSPEED_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("CHARTSPEED"); }],
        /// <field>
        /// Called after the CHARTNO content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CHARTNO_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("CHARTNO"); }],
        /// <field>
        /// Called after the STARTINGTIMEDATE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        STARTINGTIMEDATE_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("STARTINGTIMEDATE"); }],
        /// <field>
        /// Called after the ENDINGTIMEDATE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ENDINGTIMEDATE_postRender: [$element, function () { return new lightSwitchApplication.Inspect_PWHT2().findContentItem("ENDINGTIMEDATE"); }]
    });

    lightSwitchApplication.Inspect_WVF2.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_WVF2
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF2,
            value: lightSwitchApplication.Inspect_WVF2
        },
        INspect_WVF_Detail_Query1: {
            _$class: msls.ContentItem,
            _$name: "INspect_WVF_Detail_Query1",
            _$parentName: "Details",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF2,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Inspect_WVF2,
                _$entry: {
                    elementType: lightSwitchApplication.Inspect_WVF_Detail
                }
            }
        },
        INspect_WVF_Detail_Query1Template: {
            _$class: msls.ContentItem,
            _$name: "INspect_WVF_Detail_Query1Template",
            _$parentName: "INspect_WVF_Detail_Query1",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: lightSwitchApplication.Inspect_WVF_Detail
        },
        Project_ID: {
            _$class: msls.ContentItem,
            _$name: "Project_ID",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        Module_ID: {
            _$class: msls.ContentItem,
            _$name: "Module_ID",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        Drg_ID: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        Joint_ID: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        Joint_No: {
            _$class: msls.ContentItem,
            _$name: "Joint_No",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        FTU_No_l2_FTU: {
            _$class: msls.ContentItem,
            _$name: "FTU_No_l2_FTU",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        WVF_No: {
            _$class: msls.ContentItem,
            _$name: "WVF_No",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        EXEC_Remark: {
            _$class: msls.ContentItem,
            _$name: "EXEC_Remark",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        Offer_By: {
            _$class: msls.ContentItem,
            _$name: "Offer_By",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        WVF_Date: {
            _$class: msls.ContentItem,
            _$name: "WVF_Date",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: Date
        },
        WPS_l2_WPS: {
            _$class: msls.ContentItem,
            _$name: "WPS_l2_WPS",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        Weld_Process: {
            _$class: msls.ContentItem,
            _$name: "Weld_Process",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        Welder: {
            _$class: msls.ContentItem,
            _$name: "Welder",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        Remark_Det: {
            _$class: msls.ContentItem,
            _$name: "Remark_Det",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        DCN_No: {
            _$class: msls.ContentItem,
            _$name: "DCN_No",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        flg_RT: {
            _$class: msls.ContentItem,
            _$name: "flg_RT",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        flg_UT: {
            _$class: msls.ContentItem,
            _$name: "flg_UT",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        flg_MT: {
            _$class: msls.ContentItem,
            _$name: "flg_MT",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        flg_PT: {
            _$class: msls.ContentItem,
            _$name: "flg_PT",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        flg_PA_UT: {
            _$class: msls.ContentItem,
            _$name: "flg_PA_UT",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        flg_TOFD_UT: {
            _$class: msls.ContentItem,
            _$name: "flg_TOFD_UT",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        QCWVFremark: {
            _$class: msls.ContentItem,
            _$name: "QCWVFremark",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        RT_Per: {
            _$class: msls.ContentItem,
            _$name: "RT_Per",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        RTOffer: {
            _$class: msls.ContentItem,
            _$name: "RTOffer",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: Boolean
        },
        RTNDEremark: {
            _$class: msls.ContentItem,
            _$name: "RTNDEremark",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        UT_Per: {
            _$class: msls.ContentItem,
            _$name: "UT_Per",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        UTOffer: {
            _$class: msls.ContentItem,
            _$name: "UTOffer",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: Boolean
        },
        UTNDERemark: {
            _$class: msls.ContentItem,
            _$name: "UTNDERemark",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        MT_Per: {
            _$class: msls.ContentItem,
            _$name: "MT_Per",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        MTOffer: {
            _$class: msls.ContentItem,
            _$name: "MTOffer",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: Boolean
        },
        PT_Per: {
            _$class: msls.ContentItem,
            _$name: "PT_Per",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        PTOffer: {
            _$class: msls.ContentItem,
            _$name: "PTOffer",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: Boolean
        },
        PTNDEREMARK: {
            _$class: msls.ContentItem,
            _$name: "PTNDEREMARK",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        PA_UT_Per: {
            _$class: msls.ContentItem,
            _$name: "PA_UT_Per",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        PAUTOffer: {
            _$class: msls.ContentItem,
            _$name: "PAUTOffer",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: Boolean
        },
        TOFD_UT_Per: {
            _$class: msls.ContentItem,
            _$name: "TOFD_UT_Per",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        TOFDUTOffer: {
            _$class: msls.ContentItem,
            _$name: "TOFDUTOffer",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: Boolean
        },
        RT_Status: {
            _$class: msls.ContentItem,
            _$name: "RT_Status",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        UT_Status: {
            _$class: msls.ContentItem,
            _$name: "UT_Status",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        MT_Status: {
            _$class: msls.ContentItem,
            _$name: "MT_Status",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        MTNDEREMARK: {
            _$class: msls.ContentItem,
            _$name: "MTNDEREMARK",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        PT_Status: {
            _$class: msls.ContentItem,
            _$name: "PT_Status",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        PA_UT_Status: {
            _$class: msls.ContentItem,
            _$name: "PA_UT_Status",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        PAUTNDEREMARK: {
            _$class: msls.ContentItem,
            _$name: "PAUTNDEREMARK",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        TOFD_UT_Status: {
            _$class: msls.ContentItem,
            _$name: "TOFD_UT_Status",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        NDE_Per_Type: {
            _$class: msls.ContentItem,
            _$name: "NDE_Per_Type",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        DefLength: {
            _$class: msls.ContentItem,
            _$name: "DefLength",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        Desg: {
            _$class: msls.ContentItem,
            _$name: "Desg",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        NDEPLan: {
            _$class: msls.ContentItem,
            _$name: "NDEPLan",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        Joint_Category: {
            _$class: msls.ContentItem,
            _$name: "Joint_Category",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        Joint_Config: {
            _$class: msls.ContentItem,
            _$name: "Joint_Config",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        TOFDUTNDEREMARK: {
            _$class: msls.ContentItem,
            _$name: "TOFDUTNDEREMARK",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        Length1: {
            _$class: msls.ContentItem,
            _$name: "Length1",
            _$parentName: "INspect_WVF_Detail_Query1Template",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF_Detail,
            value: String
        },
        QCREMARK: {
            _$class: msls.ContentItem,
            _$name: "QCREMARK",
            _$parentName: "Details",
            screen: lightSwitchApplication.Inspect_WVF2,
            data: lightSwitchApplication.Inspect_WVF2,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Inspect_WVF2
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Inspect_WVF2, {
        /// <field>
        /// Called when a new Inspect_WVF2 screen is created.
        /// <br/>created(msls.application.Inspect_WVF2 screen)
        /// </field>
        created: [lightSwitchApplication.Inspect_WVF2],
        /// <field>
        /// Called before changes on an active Inspect_WVF2 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Inspect_WVF2 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Inspect_WVF2],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Details"); }],
        /// <field>
        /// Called after the INspect_WVF_Detail_Query1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INspect_WVF_Detail_Query1_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("INspect_WVF_Detail_Query1"); }],
        /// <field>
        /// Called after the INspect_WVF_Detail_Query1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        INspect_WVF_Detail_Query1Template_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("INspect_WVF_Detail_Query1Template"); }],
        /// <field>
        /// Called after the Project_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_ID_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Project_ID"); }],
        /// <field>
        /// Called after the Module_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Module_ID"); }],
        /// <field>
        /// Called after the Drg_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Drg_ID"); }],
        /// <field>
        /// Called after the Joint_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Joint_ID"); }],
        /// <field>
        /// Called after the Joint_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Joint_No"); }],
        /// <field>
        /// Called after the FTU_No_l2_FTU content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FTU_No_l2_FTU_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("FTU_No_l2_FTU"); }],
        /// <field>
        /// Called after the WVF_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVF_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("WVF_No"); }],
        /// <field>
        /// Called after the EXEC_Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EXEC_Remark_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("EXEC_Remark"); }],
        /// <field>
        /// Called after the Offer_By content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Offer_By_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Offer_By"); }],
        /// <field>
        /// Called after the WVF_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVF_Date_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("WVF_Date"); }],
        /// <field>
        /// Called after the WPS_l2_WPS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WPS_l2_WPS_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("WPS_l2_WPS"); }],
        /// <field>
        /// Called after the Weld_Process content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Weld_Process_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Weld_Process"); }],
        /// <field>
        /// Called after the Welder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Welder"); }],
        /// <field>
        /// Called after the Remark_Det content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_Det_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Remark_Det"); }],
        /// <field>
        /// Called after the DCN_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DCN_No_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("DCN_No"); }],
        /// <field>
        /// Called after the flg_RT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_RT_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("flg_RT"); }],
        /// <field>
        /// Called after the flg_UT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_UT_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("flg_UT"); }],
        /// <field>
        /// Called after the flg_MT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_MT_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("flg_MT"); }],
        /// <field>
        /// Called after the flg_PT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_PT_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("flg_PT"); }],
        /// <field>
        /// Called after the flg_PA_UT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_PA_UT_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("flg_PA_UT"); }],
        /// <field>
        /// Called after the flg_TOFD_UT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_TOFD_UT_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("flg_TOFD_UT"); }],
        /// <field>
        /// Called after the QCWVFremark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QCWVFremark_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("QCWVFremark"); }],
        /// <field>
        /// Called after the RT_Per content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RT_Per_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("RT_Per"); }],
        /// <field>
        /// Called after the RTOffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RTOffer_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("RTOffer"); }],
        /// <field>
        /// Called after the RTNDEremark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RTNDEremark_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("RTNDEremark"); }],
        /// <field>
        /// Called after the UT_Per content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UT_Per_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("UT_Per"); }],
        /// <field>
        /// Called after the UTOffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UTOffer_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("UTOffer"); }],
        /// <field>
        /// Called after the UTNDERemark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UTNDERemark_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("UTNDERemark"); }],
        /// <field>
        /// Called after the MT_Per content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MT_Per_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("MT_Per"); }],
        /// <field>
        /// Called after the MTOffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MTOffer_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("MTOffer"); }],
        /// <field>
        /// Called after the PT_Per content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PT_Per_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("PT_Per"); }],
        /// <field>
        /// Called after the PTOffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PTOffer_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("PTOffer"); }],
        /// <field>
        /// Called after the PTNDEREMARK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PTNDEREMARK_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("PTNDEREMARK"); }],
        /// <field>
        /// Called after the PA_UT_Per content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PA_UT_Per_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("PA_UT_Per"); }],
        /// <field>
        /// Called after the PAUTOffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PAUTOffer_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("PAUTOffer"); }],
        /// <field>
        /// Called after the TOFD_UT_Per content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TOFD_UT_Per_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("TOFD_UT_Per"); }],
        /// <field>
        /// Called after the TOFDUTOffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TOFDUTOffer_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("TOFDUTOffer"); }],
        /// <field>
        /// Called after the RT_Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RT_Status_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("RT_Status"); }],
        /// <field>
        /// Called after the UT_Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UT_Status_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("UT_Status"); }],
        /// <field>
        /// Called after the MT_Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MT_Status_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("MT_Status"); }],
        /// <field>
        /// Called after the MTNDEREMARK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MTNDEREMARK_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("MTNDEREMARK"); }],
        /// <field>
        /// Called after the PT_Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PT_Status_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("PT_Status"); }],
        /// <field>
        /// Called after the PA_UT_Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PA_UT_Status_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("PA_UT_Status"); }],
        /// <field>
        /// Called after the PAUTNDEREMARK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PAUTNDEREMARK_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("PAUTNDEREMARK"); }],
        /// <field>
        /// Called after the TOFD_UT_Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TOFD_UT_Status_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("TOFD_UT_Status"); }],
        /// <field>
        /// Called after the NDE_Per_Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NDE_Per_Type_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("NDE_Per_Type"); }],
        /// <field>
        /// Called after the DefLength content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DefLength_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("DefLength"); }],
        /// <field>
        /// Called after the Desg content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Desg_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Desg"); }],
        /// <field>
        /// Called after the NDEPLan content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NDEPLan_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("NDEPLan"); }],
        /// <field>
        /// Called after the Joint_Category content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_Category_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Joint_Category"); }],
        /// <field>
        /// Called after the Joint_Config content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_Config_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Joint_Config"); }],
        /// <field>
        /// Called after the TOFDUTNDEREMARK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TOFDUTNDEREMARK_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("TOFDUTNDEREMARK"); }],
        /// <field>
        /// Called after the Length1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Length1_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("Length1"); }],
        /// <field>
        /// Called after the QCREMARK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QCREMARK_postRender: [$element, function () { return new lightSwitchApplication.Inspect_WVF2().findContentItem("QCREMARK"); }]
    });

    lightSwitchApplication.WVFInspect1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.WVFInspect1
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.WVFInspect1,
            data: lightSwitchApplication.WVFInspect1,
            value: lightSwitchApplication.WVFInspect1
        },
        Inspect_WVF_Query: {
            _$class: msls.ContentItem,
            _$name: "Inspect_WVF_Query",
            _$parentName: "Details",
            screen: lightSwitchApplication.WVFInspect1,
            data: lightSwitchApplication.WVFInspect1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.WVFInspect1,
                _$entry: {
                    elementType: lightSwitchApplication.GET_INSPECT_For_WVF
                }
            }
        },
        Inspect_WVF_QueryTemplate: {
            _$class: msls.ContentItem,
            _$name: "Inspect_WVF_QueryTemplate",
            _$parentName: "Inspect_WVF_Query",
            screen: lightSwitchApplication.WVFInspect1,
            data: lightSwitchApplication.GET_INSPECT_For_WVF,
            value: lightSwitchApplication.GET_INSPECT_For_WVF
        },
        WVF_No: {
            _$class: msls.ContentItem,
            _$name: "WVF_No",
            _$parentName: "Inspect_WVF_QueryTemplate",
            screen: lightSwitchApplication.WVFInspect1,
            data: lightSwitchApplication.GET_INSPECT_For_WVF,
            value: String
        },
        WVF_Date: {
            _$class: msls.ContentItem,
            _$name: "WVF_Date",
            _$parentName: "Inspect_WVF_QueryTemplate",
            screen: lightSwitchApplication.WVFInspect1,
            data: lightSwitchApplication.GET_INSPECT_For_WVF,
            value: Date
        },
        Insp_PlanDate: {
            _$class: msls.ContentItem,
            _$name: "Insp_PlanDate",
            _$parentName: "Inspect_WVF_QueryTemplate",
            screen: lightSwitchApplication.WVFInspect1,
            data: lightSwitchApplication.GET_INSPECT_For_WVF,
            value: Date
        },
        Module_Name: {
            _$class: msls.ContentItem,
            _$name: "Module_Name",
            _$parentName: "Inspect_WVF_QueryTemplate",
            screen: lightSwitchApplication.WVFInspect1,
            data: lightSwitchApplication.GET_INSPECT_For_WVF,
            value: String
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "Inspect_WVF_QueryTemplate",
            screen: lightSwitchApplication.WVFInspect1,
            data: lightSwitchApplication.GET_INSPECT_For_WVF,
            value: String
        },
        Contractor: {
            _$class: msls.ContentItem,
            _$name: "Contractor",
            _$parentName: "Inspect_WVF_QueryTemplate",
            screen: lightSwitchApplication.WVFInspect1,
            data: lightSwitchApplication.GET_INSPECT_For_WVF,
            value: String
        },
        Module_ID: {
            _$class: msls.ContentItem,
            _$name: "Module_ID",
            _$parentName: "Inspect_WVF_QueryTemplate",
            screen: lightSwitchApplication.WVFInspect1,
            data: lightSwitchApplication.GET_INSPECT_For_WVF,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.WVFInspect1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.WVFInspect1, {
        /// <field>
        /// Called when a new WVFInspect1 screen is created.
        /// <br/>created(msls.application.WVFInspect1 screen)
        /// </field>
        created: [lightSwitchApplication.WVFInspect1],
        /// <field>
        /// Called before changes on an active WVFInspect1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.WVFInspect1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.WVFInspect1],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.WVFInspect1().findContentItem("Details"); }],
        /// <field>
        /// Called after the Inspect_WVF_Query content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Inspect_WVF_Query_postRender: [$element, function () { return new lightSwitchApplication.WVFInspect1().findContentItem("Inspect_WVF_Query"); }],
        /// <field>
        /// Called after the Inspect_WVF_QueryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Inspect_WVF_QueryTemplate_postRender: [$element, function () { return new lightSwitchApplication.WVFInspect1().findContentItem("Inspect_WVF_QueryTemplate"); }],
        /// <field>
        /// Called after the WVF_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVF_No_postRender: [$element, function () { return new lightSwitchApplication.WVFInspect1().findContentItem("WVF_No"); }],
        /// <field>
        /// Called after the WVF_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVF_Date_postRender: [$element, function () { return new lightSwitchApplication.WVFInspect1().findContentItem("WVF_Date"); }],
        /// <field>
        /// Called after the Insp_PlanDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Insp_PlanDate_postRender: [$element, function () { return new lightSwitchApplication.WVFInspect1().findContentItem("Insp_PlanDate"); }],
        /// <field>
        /// Called after the Module_Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_Name_postRender: [$element, function () { return new lightSwitchApplication.WVFInspect1().findContentItem("Module_Name"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.WVFInspect1().findContentItem("UserName"); }],
        /// <field>
        /// Called after the Contractor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Contractor_postRender: [$element, function () { return new lightSwitchApplication.WVFInspect1().findContentItem("Contractor"); }],
        /// <field>
        /// Called after the Module_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID_postRender: [$element, function () { return new lightSwitchApplication.WVFInspect1().findContentItem("Module_ID"); }]
    });

    lightSwitchApplication.AddEditsps_FTU.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_FTU
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.AddEditsps_FTU,
            value: lightSwitchApplication.AddEditsps_FTU
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.AddEditsps_FTU,
            value: lightSwitchApplication.sps_FTU
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.sps_FTU,
            value: lightSwitchApplication.sps_FTU
        },
        para_User_Name: {
            _$class: msls.ContentItem,
            _$name: "para_User_Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.sps_FTU,
            value: String
        },
        LocationProperty: {
            _$class: msls.ContentItem,
            _$name: "LocationProperty",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.sps_FTU,
            value: lightSwitchApplication.sps_Location
        },
        sps_Location: {
            _$class: msls.ContentItem,
            _$name: "sps_Location",
            _$parentName: "LocationProperty",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.sps_Location,
            value: lightSwitchApplication.sps_Location
        },
        ContractorProperty: {
            _$class: msls.ContentItem,
            _$name: "ContractorProperty",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.sps_FTU,
            value: lightSwitchApplication.GET_CONTRACTOR
        },
        GET_CONTRACTOR: {
            _$class: msls.ContentItem,
            _$name: "GET_CONTRACTOR",
            _$parentName: "ContractorProperty",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.GET_CONTRACTOR,
            value: lightSwitchApplication.GET_CONTRACTOR
        },
        EXEC_Remark: {
            _$class: msls.ContentItem,
            _$name: "EXEC_Remark",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.sps_FTU,
            value: String
        },
        Insp_PlanDate: {
            _$class: msls.ContentItem,
            _$name: "Insp_PlanDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.sps_FTU,
            value: Date
        },
        sps_FTUDetails: {
            _$class: msls.ContentItem,
            _$name: "sps_FTUDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.AddEditsps_FTU,
            value: lightSwitchApplication.AddEditsps_FTU
        },
        sps_FTUDetails1: {
            _$class: msls.ContentItem,
            _$name: "sps_FTUDetails1",
            _$parentName: "sps_FTUDetails",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.AddEditsps_FTU,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditsps_FTU,
                _$entry: {
                    elementType: lightSwitchApplication.sps_FTUDetail
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "sps_FTUDetails1",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_FTUDetail
        },
        FTU_No_l2_FTU: {
            _$class: msls.ContentItem,
            _$name: "FTU_No_l2_FTU",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.sps_FTUDetail,
            value: String
        },
        Joint_ID_l2_Joints: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID_l2_Joints",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.sps_FTUDetail,
            value: String
        },
        Drg_ID_l2_DrgList: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_l2_DrgList",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_FTU,
            data: lightSwitchApplication.sps_FTUDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_FTU
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditsps_FTU, {
        /// <field>
        /// Called when a new AddEditsps_FTU screen is created.
        /// <br/>created(msls.application.AddEditsps_FTU screen)
        /// </field>
        created: [lightSwitchApplication.AddEditsps_FTU],
        /// <field>
        /// Called before changes on an active AddEditsps_FTU screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditsps_FTU screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditsps_FTU],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("left"); }],
        /// <field>
        /// Called after the para_User_Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        para_User_Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("para_User_Name"); }],
        /// <field>
        /// Called after the LocationProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LocationProperty_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("LocationProperty"); }],
        /// <field>
        /// Called after the sps_Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_Location_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("sps_Location"); }],
        /// <field>
        /// Called after the ContractorProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractorProperty_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("ContractorProperty"); }],
        /// <field>
        /// Called after the GET_CONTRACTOR content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GET_CONTRACTOR_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("GET_CONTRACTOR"); }],
        /// <field>
        /// Called after the EXEC_Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EXEC_Remark_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("EXEC_Remark"); }],
        /// <field>
        /// Called after the Insp_PlanDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Insp_PlanDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("Insp_PlanDate"); }],
        /// <field>
        /// Called after the sps_FTUDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_FTUDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("sps_FTUDetails"); }],
        /// <field>
        /// Called after the sps_FTUDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_FTUDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("sps_FTUDetails1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("rows"); }],
        /// <field>
        /// Called after the FTU_No_l2_FTU content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FTU_No_l2_FTU_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("FTU_No_l2_FTU"); }],
        /// <field>
        /// Called after the Joint_ID_l2_Joints content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID_l2_Joints_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("Joint_ID_l2_Joints"); }],
        /// <field>
        /// Called after the Drg_ID_l2_DrgList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_l2_DrgList_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTU().findContentItem("Drg_ID_l2_DrgList"); }]
    });

    lightSwitchApplication.AddEditsps_FTUDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_FTUDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.AddEditsps_FTUDetail,
            value: lightSwitchApplication.AddEditsps_FTUDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.AddEditsps_FTUDetail,
            value: lightSwitchApplication.sps_FTUDetail
        },
        DrgNoProperty: {
            _$class: msls.ContentItem,
            _$name: "DrgNoProperty",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer
        },
        sps_View_Get_DrgNo_For_FitUpOffer: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_DrgNo_For_FitUpOffer",
            _$parentName: "DrgNoProperty",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer,
            value: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer
        },
        DisplayDrgNoForFitupOffer: {
            _$class: msls.ContentItem,
            _$name: "DisplayDrgNoForFitupOffer",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditsps_FTUDetail,
                _$entry: {
                    elementType: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer
                }
            }
        },
        DisplayDrgNoForFitupOfferTemplate: {
            _$class: msls.ContentItem,
            _$name: "DisplayDrgNoForFitupOfferTemplate",
            _$parentName: "DisplayDrgNoForFitupOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer,
            value: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer
        },
        Drg_ID1: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID1",
            _$parentName: "DisplayDrgNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer,
            value: String
        },
        Rev: {
            _$class: msls.ContentItem,
            _$name: "Rev",
            _$parentName: "DisplayDrgNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer,
            value: String
        },
        Sheet_No: {
            _$class: msls.ContentItem,
            _$name: "Sheet_No",
            _$parentName: "DisplayDrgNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer,
            value: String
        },
        Total_Sheets: {
            _$class: msls.ContentItem,
            _$name: "Total_Sheets",
            _$parentName: "DisplayDrgNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer,
            value: String
        },
        Drg_No_MFF: {
            _$class: msls.ContentItem,
            _$name: "Drg_No_MFF",
            _$parentName: "DisplayDrgNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_DrgNo_For_FitUpOffer,
            value: String
        },
        JointNoProperty: {
            _$class: msls.ContentItem,
            _$name: "JointNoProperty",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer
        },
        sps_View_Get_JointNo_For_FitUpOffer: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_JointNo_For_FitUpOffer",
            _$parentName: "JointNoProperty",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer
        },
        Joint_No: {
            _$class: msls.ContentItem,
            _$name: "Joint_No",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Joint_ID1: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID1",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Joint_Category: {
            _$class: msls.ContentItem,
            _$name: "Joint_Category",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Length: {
            _$class: msls.ContentItem,
            _$name: "Length",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Thickness: {
            _$class: msls.ContentItem,
            _$name: "Thickness",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Material1: {
            _$class: msls.ContentItem,
            _$name: "Material1",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Material2: {
            _$class: msls.ContentItem,
            _$name: "Material2",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Material3: {
            _$class: msls.ContentItem,
            _$name: "Material3",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Material4: {
            _$class: msls.ContentItem,
            _$name: "Material4",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Material5: {
            _$class: msls.ContentItem,
            _$name: "Material5",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        WPS: {
            _$class: msls.ContentItem,
            _$name: "WPS",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Weld_Process: {
            _$class: msls.ContentItem,
            _$name: "Weld_Process",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part1: {
            _$class: msls.ContentItem,
            _$name: "Part1",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part2: {
            _$class: msls.ContentItem,
            _$name: "Part2",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part3: {
            _$class: msls.ContentItem,
            _$name: "Part3",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part4: {
            _$class: msls.ContentItem,
            _$name: "Part4",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part5: {
            _$class: msls.ContentItem,
            _$name: "Part5",
            _$parentName: "sps_View_Get_JointNo_For_FitUpOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        DisplayJointNoForFitupOffer: {
            _$class: msls.ContentItem,
            _$name: "DisplayJointNoForFitupOffer",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditsps_FTUDetail,
                _$entry: {
                    elementType: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer
                }
            }
        },
        DisplayJointNoForFitupOfferTemplate: {
            _$class: msls.ContentItem,
            _$name: "DisplayJointNoForFitupOfferTemplate",
            _$parentName: "DisplayJointNoForFitupOffer",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer
        },
        Joint_No1: {
            _$class: msls.ContentItem,
            _$name: "Joint_No1",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Joint_ID: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Joint_Category1: {
            _$class: msls.ContentItem,
            _$name: "Joint_Category1",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Length1: {
            _$class: msls.ContentItem,
            _$name: "Length1",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Thickness1: {
            _$class: msls.ContentItem,
            _$name: "Thickness1",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Material11: {
            _$class: msls.ContentItem,
            _$name: "Material11",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Material21: {
            _$class: msls.ContentItem,
            _$name: "Material21",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Material31: {
            _$class: msls.ContentItem,
            _$name: "Material31",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Material41: {
            _$class: msls.ContentItem,
            _$name: "Material41",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Material51: {
            _$class: msls.ContentItem,
            _$name: "Material51",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        WPS1: {
            _$class: msls.ContentItem,
            _$name: "WPS1",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Weld_Process1: {
            _$class: msls.ContentItem,
            _$name: "Weld_Process1",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part11: {
            _$class: msls.ContentItem,
            _$name: "Part11",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part21: {
            _$class: msls.ContentItem,
            _$name: "Part21",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part31: {
            _$class: msls.ContentItem,
            _$name: "Part31",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part41: {
            _$class: msls.ContentItem,
            _$name: "Part41",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part51: {
            _$class: msls.ContentItem,
            _$name: "Part51",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Drg_ID_1: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_1",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Drg_ID_2: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_2",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Drg_ID_3: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_3",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Drg_ID_4: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_4",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Drg_ID_5: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_5",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        IMIRNO1: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO1",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        IMIRNO2: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO2",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        IMIRNO3: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO3",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        IMIRNO4: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO4",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        IMIRNO5: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO5",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        HeatNo1: {
            _$class: msls.ContentItem,
            _$name: "HeatNo1",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        HeatNo2: {
            _$class: msls.ContentItem,
            _$name: "HeatNo2",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        HeatNo3: {
            _$class: msls.ContentItem,
            _$name: "HeatNo3",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        HeatNo4: {
            _$class: msls.ContentItem,
            _$name: "HeatNo4",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        HeatNo5: {
            _$class: msls.ContentItem,
            _$name: "HeatNo5",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        IDNo1: {
            _$class: msls.ContentItem,
            _$name: "IDNo1",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        IDNo2: {
            _$class: msls.ContentItem,
            _$name: "IDNo2",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        IDNo3: {
            _$class: msls.ContentItem,
            _$name: "IDNo3",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        IDNo4: {
            _$class: msls.ContentItem,
            _$name: "IDNo4",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        IDNo5: {
            _$class: msls.ContentItem,
            _$name: "IDNo5",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part1Thk: {
            _$class: msls.ContentItem,
            _$name: "Part1Thk",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part2Thk: {
            _$class: msls.ContentItem,
            _$name: "Part2Thk",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part3Thk: {
            _$class: msls.ContentItem,
            _$name: "Part3Thk",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part4Thk: {
            _$class: msls.ContentItem,
            _$name: "Part4Thk",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part5Thk: {
            _$class: msls.ContentItem,
            _$name: "Part5Thk",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part1Len: {
            _$class: msls.ContentItem,
            _$name: "Part1Len",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part2Len: {
            _$class: msls.ContentItem,
            _$name: "Part2Len",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part3Len: {
            _$class: msls.ContentItem,
            _$name: "Part3Len",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part4Len: {
            _$class: msls.ContentItem,
            _$name: "Part4Len",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        Part5Len: {
            _$class: msls.ContentItem,
            _$name: "Part5Len",
            _$parentName: "DisplayJointNoForFitupOfferTemplate",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_JointNo_For_FitUpOffer,
            value: String
        },
        IMIRIDHeat1Property: {
            _$class: msls.ContentItem,
            _$name: "IMIRIDHeat1Property",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item
        },
        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item",
            _$parentName: "IMIRIDHeat1Property",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item,
            value: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item
        },
        Drg_id_l2_drglist: {
            _$class: msls.ContentItem,
            _$name: "Drg_id_l2_drglist",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item,
            value: String
        },
        Joint_No2: {
            _$class: msls.ContentItem,
            _$name: "Joint_No2",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item,
            value: String
        },
        Drg_ID: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item,
            value: String
        },
        IMIRNO: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item,
            value: String
        },
        IDNO: {
            _$class: msls.ContentItem,
            _$name: "IDNO",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item,
            value: String
        },
        HeatNo: {
            _$class: msls.ContentItem,
            _$name: "HeatNo",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item,
            value: String
        },
        IMIRIDHeat2Property: {
            _$class: msls.ContentItem,
            _$name: "IMIRIDHeat2Property",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item
        },
        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item",
            _$parentName: "IMIRIDHeat2Property",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item,
            value: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item
        },
        Drg_id_l2_drglist1: {
            _$class: msls.ContentItem,
            _$name: "Drg_id_l2_drglist1",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item,
            value: String
        },
        Joint_No3: {
            _$class: msls.ContentItem,
            _$name: "Joint_No3",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item,
            value: String
        },
        Drg_ID_21: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_21",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item,
            value: String
        },
        IMIRNO6: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO6",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item,
            value: String
        },
        IDNO6: {
            _$class: msls.ContentItem,
            _$name: "IDNO6",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item,
            value: String
        },
        HeatNo6: {
            _$class: msls.ContentItem,
            _$name: "HeatNo6",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item,
            value: String
        },
        IMIRIDHeat3Property: {
            _$class: msls.ContentItem,
            _$name: "IMIRIDHeat3Property",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item
        },
        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item",
            _$parentName: "IMIRIDHeat3Property",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item,
            value: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item
        },
        Drg_id_l2_drglist2: {
            _$class: msls.ContentItem,
            _$name: "Drg_id_l2_drglist2",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item,
            value: String
        },
        Joint_No4: {
            _$class: msls.ContentItem,
            _$name: "Joint_No4",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item,
            value: String
        },
        IMIRNO7: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO7",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item,
            value: String
        },
        IDNO7: {
            _$class: msls.ContentItem,
            _$name: "IDNO7",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item,
            value: String
        },
        HeatNo7: {
            _$class: msls.ContentItem,
            _$name: "HeatNo7",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item,
            value: String
        },
        Part_No_l2_Drg_BOQ: {
            _$class: msls.ContentItem,
            _$name: "Part_No_l2_Drg_BOQ",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item,
            value: String
        },
        IMIRIDHeat4Property: {
            _$class: msls.ContentItem,
            _$name: "IMIRIDHeat4Property",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item
        },
        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item",
            _$parentName: "IMIRIDHeat4Property",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item,
            value: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item
        },
        Drg_id_l2_drglist3: {
            _$class: msls.ContentItem,
            _$name: "Drg_id_l2_drglist3",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item,
            value: String
        },
        Joint_No5: {
            _$class: msls.ContentItem,
            _$name: "Joint_No5",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item,
            value: String
        },
        IMIRNO8: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO8",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item,
            value: String
        },
        IDNO8: {
            _$class: msls.ContentItem,
            _$name: "IDNO8",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item,
            value: String
        },
        HeatNo8: {
            _$class: msls.ContentItem,
            _$name: "HeatNo8",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item,
            value: String
        },
        Part_No_l2_Drg_BOQ1: {
            _$class: msls.ContentItem,
            _$name: "Part_No_l2_Drg_BOQ1",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item,
            value: String
        },
        IMIRIDHeat5Property: {
            _$class: msls.ContentItem,
            _$name: "IMIRIDHeat5Property",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item
        },
        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item",
            _$parentName: "IMIRIDHeat5Property",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item,
            value: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item
        },
        Drg_id_l2_drglist4: {
            _$class: msls.ContentItem,
            _$name: "Drg_id_l2_drglist4",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item,
            value: String
        },
        Joint_No6: {
            _$class: msls.ContentItem,
            _$name: "Joint_No6",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item,
            value: String
        },
        IMIRNO9: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO9",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item,
            value: String
        },
        IDNO9: {
            _$class: msls.ContentItem,
            _$name: "IDNO9",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item,
            value: String
        },
        HeatNo9: {
            _$class: msls.ContentItem,
            _$name: "HeatNo9",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item,
            value: String
        },
        Part_No_l2_Drg_BOQ2: {
            _$class: msls.ContentItem,
            _$name: "Part_No_l2_Drg_BOQ2",
            _$parentName: "sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item,
            value: String
        },
        MPI1: {
            _$class: msls.ContentItem,
            _$name: "MPI1",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer
        },
        sps_View_Get_MPINo_For_FitupOffer: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_MPINo_For_FitupOffer",
            _$parentName: "MPI1",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer,
            value: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer
        },
        MPI2: {
            _$class: msls.ContentItem,
            _$name: "MPI2",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer
        },
        sps_View_Get_MPINo_For_FitupOffer1: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_MPINo_For_FitupOffer1",
            _$parentName: "MPI2",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer,
            value: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer
        },
        MPI3: {
            _$class: msls.ContentItem,
            _$name: "MPI3",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer
        },
        sps_View_Get_MPINo_For_FitupOffer2: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_MPINo_For_FitupOffer2",
            _$parentName: "MPI3",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer,
            value: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer
        },
        MPI4: {
            _$class: msls.ContentItem,
            _$name: "MPI4",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer
        },
        sps_View_Get_MPINo_For_FitupOffer3: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_MPINo_For_FitupOffer3",
            _$parentName: "MPI4",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer,
            value: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer
        },
        MPI5: {
            _$class: msls.ContentItem,
            _$name: "MPI5",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer
        },
        sps_View_Get_MPINo_For_FitupOffer4: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_MPINo_For_FitupOffer4",
            _$parentName: "MPI5",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer,
            value: lightSwitchApplication.sps_View_Get_MPINo_For_FitupOffer
        },
        Remark_Detail: {
            _$class: msls.ContentItem,
            _$name: "Remark_Detail",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_FTUDetail,
            data: lightSwitchApplication.sps_FTUDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_FTUDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditsps_FTUDetail, {
        /// <field>
        /// Called when a new AddEditsps_FTUDetail screen is created.
        /// <br/>created(msls.application.AddEditsps_FTUDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditsps_FTUDetail],
        /// <field>
        /// Called before changes on an active AddEditsps_FTUDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditsps_FTUDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditsps_FTUDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the DrgNoProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DrgNoProperty_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("DrgNoProperty"); }],
        /// <field>
        /// Called after the sps_View_Get_DrgNo_For_FitUpOffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_DrgNo_For_FitUpOffer_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("sps_View_Get_DrgNo_For_FitUpOffer"); }],
        /// <field>
        /// Called after the DisplayDrgNoForFitupOffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DisplayDrgNoForFitupOffer_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("DisplayDrgNoForFitupOffer"); }],
        /// <field>
        /// Called after the DisplayDrgNoForFitupOfferTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DisplayDrgNoForFitupOfferTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("DisplayDrgNoForFitupOfferTemplate"); }],
        /// <field>
        /// Called after the Drg_ID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_ID1"); }],
        /// <field>
        /// Called after the Rev content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Rev_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Rev"); }],
        /// <field>
        /// Called after the Sheet_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Sheet_No_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Sheet_No"); }],
        /// <field>
        /// Called after the Total_Sheets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Total_Sheets_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Total_Sheets"); }],
        /// <field>
        /// Called after the Drg_No_MFF content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_No_MFF_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_No_MFF"); }],
        /// <field>
        /// Called after the JointNoProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JointNoProperty_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("JointNoProperty"); }],
        /// <field>
        /// Called after the sps_View_Get_JointNo_For_FitUpOffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_JointNo_For_FitUpOffer_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("sps_View_Get_JointNo_For_FitUpOffer"); }],
        /// <field>
        /// Called after the Joint_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Joint_No"); }],
        /// <field>
        /// Called after the Joint_ID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Joint_ID1"); }],
        /// <field>
        /// Called after the Joint_Category content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_Category_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Joint_Category"); }],
        /// <field>
        /// Called after the Length content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Length_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Length"); }],
        /// <field>
        /// Called after the Thickness content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Thickness_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Thickness"); }],
        /// <field>
        /// Called after the Material1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Material1"); }],
        /// <field>
        /// Called after the Material2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Material2"); }],
        /// <field>
        /// Called after the Material3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material3_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Material3"); }],
        /// <field>
        /// Called after the Material4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material4_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Material4"); }],
        /// <field>
        /// Called after the Material5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material5_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Material5"); }],
        /// <field>
        /// Called after the WPS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WPS_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("WPS"); }],
        /// <field>
        /// Called after the Weld_Process content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Weld_Process_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Weld_Process"); }],
        /// <field>
        /// Called after the Part1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part1"); }],
        /// <field>
        /// Called after the Part2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part2"); }],
        /// <field>
        /// Called after the Part3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part3_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part3"); }],
        /// <field>
        /// Called after the Part4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part4_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part4"); }],
        /// <field>
        /// Called after the Part5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part5_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part5"); }],
        /// <field>
        /// Called after the DisplayJointNoForFitupOffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DisplayJointNoForFitupOffer_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("DisplayJointNoForFitupOffer"); }],
        /// <field>
        /// Called after the DisplayJointNoForFitupOfferTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DisplayJointNoForFitupOfferTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("DisplayJointNoForFitupOfferTemplate"); }],
        /// <field>
        /// Called after the Joint_No1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Joint_No1"); }],
        /// <field>
        /// Called after the Joint_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Joint_ID"); }],
        /// <field>
        /// Called after the Joint_Category1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_Category1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Joint_Category1"); }],
        /// <field>
        /// Called after the Length1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Length1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Length1"); }],
        /// <field>
        /// Called after the Thickness1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Thickness1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Thickness1"); }],
        /// <field>
        /// Called after the Material11 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material11_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Material11"); }],
        /// <field>
        /// Called after the Material21 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material21_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Material21"); }],
        /// <field>
        /// Called after the Material31 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material31_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Material31"); }],
        /// <field>
        /// Called after the Material41 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material41_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Material41"); }],
        /// <field>
        /// Called after the Material51 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material51_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Material51"); }],
        /// <field>
        /// Called after the WPS1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WPS1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("WPS1"); }],
        /// <field>
        /// Called after the Weld_Process1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Weld_Process1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Weld_Process1"); }],
        /// <field>
        /// Called after the Part11 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part11_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part11"); }],
        /// <field>
        /// Called after the Part21 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part21_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part21"); }],
        /// <field>
        /// Called after the Part31 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part31_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part31"); }],
        /// <field>
        /// Called after the Part41 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part41_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part41"); }],
        /// <field>
        /// Called after the Part51 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part51_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part51"); }],
        /// <field>
        /// Called after the Drg_ID_1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_ID_1"); }],
        /// <field>
        /// Called after the Drg_ID_2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_ID_2"); }],
        /// <field>
        /// Called after the Drg_ID_3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_3_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_ID_3"); }],
        /// <field>
        /// Called after the Drg_ID_4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_4_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_ID_4"); }],
        /// <field>
        /// Called after the Drg_ID_5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_5_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_ID_5"); }],
        /// <field>
        /// Called after the IMIRNO1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRNO1"); }],
        /// <field>
        /// Called after the IMIRNO2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRNO2"); }],
        /// <field>
        /// Called after the IMIRNO3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO3_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRNO3"); }],
        /// <field>
        /// Called after the IMIRNO4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO4_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRNO4"); }],
        /// <field>
        /// Called after the IMIRNO5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO5_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRNO5"); }],
        /// <field>
        /// Called after the HeatNo1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("HeatNo1"); }],
        /// <field>
        /// Called after the HeatNo2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("HeatNo2"); }],
        /// <field>
        /// Called after the HeatNo3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo3_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("HeatNo3"); }],
        /// <field>
        /// Called after the HeatNo4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo4_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("HeatNo4"); }],
        /// <field>
        /// Called after the HeatNo5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo5_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("HeatNo5"); }],
        /// <field>
        /// Called after the IDNo1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNo1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IDNo1"); }],
        /// <field>
        /// Called after the IDNo2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNo2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IDNo2"); }],
        /// <field>
        /// Called after the IDNo3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNo3_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IDNo3"); }],
        /// <field>
        /// Called after the IDNo4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNo4_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IDNo4"); }],
        /// <field>
        /// Called after the IDNo5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNo5_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IDNo5"); }],
        /// <field>
        /// Called after the Part1Thk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part1Thk_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part1Thk"); }],
        /// <field>
        /// Called after the Part2Thk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part2Thk_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part2Thk"); }],
        /// <field>
        /// Called after the Part3Thk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part3Thk_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part3Thk"); }],
        /// <field>
        /// Called after the Part4Thk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part4Thk_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part4Thk"); }],
        /// <field>
        /// Called after the Part5Thk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part5Thk_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part5Thk"); }],
        /// <field>
        /// Called after the Part1Len content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part1Len_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part1Len"); }],
        /// <field>
        /// Called after the Part2Len content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part2Len_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part2Len"); }],
        /// <field>
        /// Called after the Part3Len content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part3Len_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part3Len"); }],
        /// <field>
        /// Called after the Part4Len content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part4Len_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part4Len"); }],
        /// <field>
        /// Called after the Part5Len content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part5Len_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part5Len"); }],
        /// <field>
        /// Called after the IMIRIDHeat1Property content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRIDHeat1Property_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRIDHeat1Property"); }],
        /// <field>
        /// Called after the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI1Item"); }],
        /// <field>
        /// Called after the Drg_id_l2_drglist content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_id_l2_drglist_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_id_l2_drglist"); }],
        /// <field>
        /// Called after the Joint_No2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Joint_No2"); }],
        /// <field>
        /// Called after the Drg_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_ID"); }],
        /// <field>
        /// Called after the IMIRNO content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRNO"); }],
        /// <field>
        /// Called after the IDNO content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNO_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IDNO"); }],
        /// <field>
        /// Called after the HeatNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("HeatNo"); }],
        /// <field>
        /// Called after the IMIRIDHeat2Property content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRIDHeat2Property_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRIDHeat2Property"); }],
        /// <field>
        /// Called after the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI2Item"); }],
        /// <field>
        /// Called after the Drg_id_l2_drglist1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_id_l2_drglist1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_id_l2_drglist1"); }],
        /// <field>
        /// Called after the Joint_No3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No3_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Joint_No3"); }],
        /// <field>
        /// Called after the Drg_ID_21 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_21_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_ID_21"); }],
        /// <field>
        /// Called after the IMIRNO6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO6_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRNO6"); }],
        /// <field>
        /// Called after the IDNO6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNO6_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IDNO6"); }],
        /// <field>
        /// Called after the HeatNo6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo6_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("HeatNo6"); }],
        /// <field>
        /// Called after the IMIRIDHeat3Property content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRIDHeat3Property_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRIDHeat3Property"); }],
        /// <field>
        /// Called after the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI3Item"); }],
        /// <field>
        /// Called after the Drg_id_l2_drglist2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_id_l2_drglist2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_id_l2_drglist2"); }],
        /// <field>
        /// Called after the Joint_No4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No4_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Joint_No4"); }],
        /// <field>
        /// Called after the IMIRNO7 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO7_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRNO7"); }],
        /// <field>
        /// Called after the IDNO7 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNO7_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IDNO7"); }],
        /// <field>
        /// Called after the HeatNo7 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo7_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("HeatNo7"); }],
        /// <field>
        /// Called after the Part_No_l2_Drg_BOQ content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part_No_l2_Drg_BOQ_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part_No_l2_Drg_BOQ"); }],
        /// <field>
        /// Called after the IMIRIDHeat4Property content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRIDHeat4Property_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRIDHeat4Property"); }],
        /// <field>
        /// Called after the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI4Item"); }],
        /// <field>
        /// Called after the Drg_id_l2_drglist3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_id_l2_drglist3_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_id_l2_drglist3"); }],
        /// <field>
        /// Called after the Joint_No5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No5_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Joint_No5"); }],
        /// <field>
        /// Called after the IMIRNO8 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO8_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRNO8"); }],
        /// <field>
        /// Called after the IDNO8 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNO8_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IDNO8"); }],
        /// <field>
        /// Called after the HeatNo8 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo8_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("HeatNo8"); }],
        /// <field>
        /// Called after the Part_No_l2_Drg_BOQ1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part_No_l2_Drg_BOQ1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part_No_l2_Drg_BOQ1"); }],
        /// <field>
        /// Called after the IMIRIDHeat5Property content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRIDHeat5Property_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRIDHeat5Property"); }],
        /// <field>
        /// Called after the sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("sps_View_Get_IMIRNo_IDNo_HEatNo_for_Ftu_Offer_From_MI5Item"); }],
        /// <field>
        /// Called after the Drg_id_l2_drglist4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_id_l2_drglist4_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Drg_id_l2_drglist4"); }],
        /// <field>
        /// Called after the Joint_No6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No6_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Joint_No6"); }],
        /// <field>
        /// Called after the IMIRNO9 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO9_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IMIRNO9"); }],
        /// <field>
        /// Called after the IDNO9 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNO9_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("IDNO9"); }],
        /// <field>
        /// Called after the HeatNo9 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo9_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("HeatNo9"); }],
        /// <field>
        /// Called after the Part_No_l2_Drg_BOQ2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part_No_l2_Drg_BOQ2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Part_No_l2_Drg_BOQ2"); }],
        /// <field>
        /// Called after the MPI1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MPI1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("MPI1"); }],
        /// <field>
        /// Called after the sps_View_Get_MPINo_For_FitupOffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_MPINo_For_FitupOffer_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("sps_View_Get_MPINo_For_FitupOffer"); }],
        /// <field>
        /// Called after the MPI2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MPI2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("MPI2"); }],
        /// <field>
        /// Called after the sps_View_Get_MPINo_For_FitupOffer1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_MPINo_For_FitupOffer1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("sps_View_Get_MPINo_For_FitupOffer1"); }],
        /// <field>
        /// Called after the MPI3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MPI3_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("MPI3"); }],
        /// <field>
        /// Called after the sps_View_Get_MPINo_For_FitupOffer2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_MPINo_For_FitupOffer2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("sps_View_Get_MPINo_For_FitupOffer2"); }],
        /// <field>
        /// Called after the MPI4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MPI4_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("MPI4"); }],
        /// <field>
        /// Called after the sps_View_Get_MPINo_For_FitupOffer3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_MPINo_For_FitupOffer3_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("sps_View_Get_MPINo_For_FitupOffer3"); }],
        /// <field>
        /// Called after the MPI5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MPI5_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("MPI5"); }],
        /// <field>
        /// Called after the sps_View_Get_MPINo_For_FitupOffer4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_MPINo_For_FitupOffer4_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("sps_View_Get_MPINo_For_FitupOffer4"); }],
        /// <field>
        /// Called after the Remark_Detail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_Detail_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_FTUDetail().findContentItem("Remark_Detail"); }]
    });

    lightSwitchApplication.AddEditsps_MPI.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_MPI
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.AddEditsps_MPI,
            value: lightSwitchApplication.AddEditsps_MPI
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.AddEditsps_MPI,
            value: lightSwitchApplication.sps_MPI
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.sps_MPI,
            value: lightSwitchApplication.sps_MPI
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.sps_MPI,
            value: String
        },
        DrgProperty: {
            _$class: msls.ContentItem,
            _$name: "DrgProperty",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.sps_MPI,
            value: lightSwitchApplication.sps_DrgList
        },
        sps_DrgList: {
            _$class: msls.ContentItem,
            _$name: "sps_DrgList",
            _$parentName: "DrgProperty",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.sps_DrgList,
            value: lightSwitchApplication.sps_DrgList
        },
        EXEC_Remark: {
            _$class: msls.ContentItem,
            _$name: "EXEC_Remark",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.sps_MPI,
            value: String
        },
        Remark: {
            _$class: msls.ContentItem,
            _$name: "Remark",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.sps_MPI,
            value: String
        },
        Insp_PlanDate: {
            _$class: msls.ContentItem,
            _$name: "Insp_PlanDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.sps_MPI,
            value: Date
        },
        sps_MPI_Detail_Offs: {
            _$class: msls.ContentItem,
            _$name: "sps_MPI_Detail_Offs",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.AddEditsps_MPI,
            value: lightSwitchApplication.AddEditsps_MPI
        },
        sps_MPI_Detail_Offs1: {
            _$class: msls.ContentItem,
            _$name: "sps_MPI_Detail_Offs1",
            _$parentName: "sps_MPI_Detail_Offs",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.AddEditsps_MPI,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditsps_MPI,
                _$entry: {
                    elementType: lightSwitchApplication.sps_MPI_Detail_Off
                }
            }
        },
        sps_MPI_Detail_Offs1Template: {
            _$class: msls.ContentItem,
            _$name: "sps_MPI_Detail_Offs1Template",
            _$parentName: "sps_MPI_Detail_Offs1",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.sps_MPI_Detail_Off,
            value: lightSwitchApplication.sps_MPI_Detail_Off
        },
        Part_No_l2_Drg_BOQ: {
            _$class: msls.ContentItem,
            _$name: "Part_No_l2_Drg_BOQ",
            _$parentName: "sps_MPI_Detail_Offs1Template",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.sps_MPI_Detail_Off,
            value: String
        },
        IMIRNO: {
            _$class: msls.ContentItem,
            _$name: "IMIRNO",
            _$parentName: "sps_MPI_Detail_Offs1Template",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.sps_MPI_Detail_Off,
            value: String
        },
        IDNO: {
            _$class: msls.ContentItem,
            _$name: "IDNO",
            _$parentName: "sps_MPI_Detail_Offs1Template",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.sps_MPI_Detail_Off,
            value: String
        },
        HeatNo: {
            _$class: msls.ContentItem,
            _$name: "HeatNo",
            _$parentName: "sps_MPI_Detail_Offs1Template",
            screen: lightSwitchApplication.AddEditsps_MPI,
            data: lightSwitchApplication.sps_MPI_Detail_Off,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_MPI
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditsps_MPI, {
        /// <field>
        /// Called when a new AddEditsps_MPI screen is created.
        /// <br/>created(msls.application.AddEditsps_MPI screen)
        /// </field>
        created: [lightSwitchApplication.AddEditsps_MPI],
        /// <field>
        /// Called before changes on an active AddEditsps_MPI screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditsps_MPI screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditsps_MPI],
        /// <field>
        /// Called to determine if the RemoveMPIDetail method can be executed.
        /// <br/>canExecute(msls.application.AddEditsps_MPI screen)
        /// </field>
        RemoveMPIDetail_canExecute: [lightSwitchApplication.AddEditsps_MPI],
        /// <field>
        /// Called to execute the RemoveMPIDetail method.
        /// <br/>execute(msls.application.AddEditsps_MPI screen)
        /// </field>
        RemoveMPIDetail_execute: [lightSwitchApplication.AddEditsps_MPI],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("left"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("Location"); }],
        /// <field>
        /// Called after the DrgProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DrgProperty_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("DrgProperty"); }],
        /// <field>
        /// Called after the sps_DrgList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_DrgList_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("sps_DrgList"); }],
        /// <field>
        /// Called after the EXEC_Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EXEC_Remark_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("EXEC_Remark"); }],
        /// <field>
        /// Called after the Remark content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Remark_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("Remark"); }],
        /// <field>
        /// Called after the Insp_PlanDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Insp_PlanDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("Insp_PlanDate"); }],
        /// <field>
        /// Called after the sps_MPI_Detail_Offs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_MPI_Detail_Offs_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("sps_MPI_Detail_Offs"); }],
        /// <field>
        /// Called after the sps_MPI_Detail_Offs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_MPI_Detail_Offs1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("sps_MPI_Detail_Offs1"); }],
        /// <field>
        /// Called after the sps_MPI_Detail_Offs1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_MPI_Detail_Offs1Template_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("sps_MPI_Detail_Offs1Template"); }],
        /// <field>
        /// Called after the Part_No_l2_Drg_BOQ content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part_No_l2_Drg_BOQ_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("Part_No_l2_Drg_BOQ"); }],
        /// <field>
        /// Called after the IMIRNO content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IMIRNO_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("IMIRNO"); }],
        /// <field>
        /// Called after the IDNO content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IDNO_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("IDNO"); }],
        /// <field>
        /// Called after the HeatNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HeatNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI().findContentItem("HeatNo"); }]
    });

    lightSwitchApplication.AddEditsps_MPI_Detail_Off.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            value: lightSwitchApplication.AddEditsps_MPI_Detail_Off
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            value: lightSwitchApplication.sps_MPI_Detail_Off
        },
        PartNoProperty: {
            _$class: msls.ContentItem,
            _$name: "PartNoProperty",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_MPI_Detail_Off,
            value: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer
        },
        sps_View_Get_Part_No_for_MI_Offer: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Part_No_for_MI_Offer",
            _$parentName: "PartNoProperty",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer
        },
        Part_No: {
            _$class: msls.ContentItem,
            _$name: "Part_No",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Drg_ID_l2_DrgList: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_l2_DrgList",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Sapcode: {
            _$class: msls.ContentItem,
            _$name: "Sapcode",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Mat_Desc: {
            _$class: msls.ContentItem,
            _$name: "Mat_Desc",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        SizeDesc: {
            _$class: msls.ContentItem,
            _$name: "SizeDesc",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Qty_Req: {
            _$class: msls.ContentItem,
            _$name: "Qty_Req",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        RevID: {
            _$class: msls.ContentItem,
            _$name: "RevID",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Rev: {
            _$class: msls.ContentItem,
            _$name: "Rev",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Sheet_No: {
            _$class: msls.ContentItem,
            _$name: "Sheet_No",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Total_Sheets: {
            _$class: msls.ContentItem,
            _$name: "Total_Sheets",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Module_ID: {
            _$class: msls.ContentItem,
            _$name: "Module_ID",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Project_ID_l2_Project: {
            _$class: msls.ContentItem,
            _$name: "Project_ID_l2_Project",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Acc_Qty: {
            _$class: msls.ContentItem,
            _$name: "Acc_Qty",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Accepted: {
            _$class: msls.ContentItem,
            _$name: "Accepted",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Length: {
            _$class: msls.ContentItem,
            _$name: "Length",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Thk: {
            _$class: msls.ContentItem,
            _$name: "Thk",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Width: {
            _$class: msls.ContentItem,
            _$name: "Width",
            _$parentName: "sps_View_Get_Part_No_for_MI_Offer",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        DisplayPartNoForMIOfferNew: {
            _$class: msls.ContentItem,
            _$name: "DisplayPartNoForMIOfferNew",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_MPI_Detail_Off,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
                _$entry: {
                    elementType: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer
                }
            }
        },
        DisplayPartNoForMIOfferNewTemplate: {
            _$class: msls.ContentItem,
            _$name: "DisplayPartNoForMIOfferNewTemplate",
            _$parentName: "DisplayPartNoForMIOfferNew",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer
        },
        Part_No1: {
            _$class: msls.ContentItem,
            _$name: "Part_No1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Drg_ID_l2_DrgList1: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_l2_DrgList1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Sapcode1: {
            _$class: msls.ContentItem,
            _$name: "Sapcode1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Mat_Desc1: {
            _$class: msls.ContentItem,
            _$name: "Mat_Desc1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        SizeDesc1: {
            _$class: msls.ContentItem,
            _$name: "SizeDesc1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Qty_Req1: {
            _$class: msls.ContentItem,
            _$name: "Qty_Req1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        RevID1: {
            _$class: msls.ContentItem,
            _$name: "RevID1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Rev1: {
            _$class: msls.ContentItem,
            _$name: "Rev1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Sheet_No1: {
            _$class: msls.ContentItem,
            _$name: "Sheet_No1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Total_Sheets1: {
            _$class: msls.ContentItem,
            _$name: "Total_Sheets1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Module_ID1: {
            _$class: msls.ContentItem,
            _$name: "Module_ID1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Project_ID_l2_Project1: {
            _$class: msls.ContentItem,
            _$name: "Project_ID_l2_Project1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Acc_Qty1: {
            _$class: msls.ContentItem,
            _$name: "Acc_Qty1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Accepted1: {
            _$class: msls.ContentItem,
            _$name: "Accepted1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Length1: {
            _$class: msls.ContentItem,
            _$name: "Length1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Thk1: {
            _$class: msls.ContentItem,
            _$name: "Thk1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Width1: {
            _$class: msls.ContentItem,
            _$name: "Width1",
            _$parentName: "DisplayPartNoForMIOfferNewTemplate",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off,
            data: lightSwitchApplication.sps_View_Get_Part_No_for_MI_Offer,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_MPI_Detail_Off
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditsps_MPI_Detail_Off, {
        /// <field>
        /// Called when a new AddEditsps_MPI_Detail_Off screen is created.
        /// <br/>created(msls.application.AddEditsps_MPI_Detail_Off screen)
        /// </field>
        created: [lightSwitchApplication.AddEditsps_MPI_Detail_Off],
        /// <field>
        /// Called before changes on an active AddEditsps_MPI_Detail_Off screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditsps_MPI_Detail_Off screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditsps_MPI_Detail_Off],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("columns"); }],
        /// <field>
        /// Called after the PartNoProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PartNoProperty_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("PartNoProperty"); }],
        /// <field>
        /// Called after the sps_View_Get_Part_No_for_MI_Offer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Part_No_for_MI_Offer_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("sps_View_Get_Part_No_for_MI_Offer"); }],
        /// <field>
        /// Called after the Part_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part_No_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Part_No"); }],
        /// <field>
        /// Called after the Drg_ID_l2_DrgList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_l2_DrgList_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Drg_ID_l2_DrgList"); }],
        /// <field>
        /// Called after the Sapcode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Sapcode_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Sapcode"); }],
        /// <field>
        /// Called after the Mat_Desc content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Mat_Desc_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Mat_Desc"); }],
        /// <field>
        /// Called after the SizeDesc content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SizeDesc_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("SizeDesc"); }],
        /// <field>
        /// Called after the Qty_Req content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Qty_Req_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Qty_Req"); }],
        /// <field>
        /// Called after the RevID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RevID_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("RevID"); }],
        /// <field>
        /// Called after the Rev content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Rev_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Rev"); }],
        /// <field>
        /// Called after the Sheet_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Sheet_No_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Sheet_No"); }],
        /// <field>
        /// Called after the Total_Sheets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Total_Sheets_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Total_Sheets"); }],
        /// <field>
        /// Called after the Module_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Module_ID"); }],
        /// <field>
        /// Called after the Project_ID_l2_Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_ID_l2_Project_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Project_ID_l2_Project"); }],
        /// <field>
        /// Called after the Acc_Qty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Acc_Qty_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Acc_Qty"); }],
        /// <field>
        /// Called after the Accepted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Accepted_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Accepted"); }],
        /// <field>
        /// Called after the Length content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Length_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Length"); }],
        /// <field>
        /// Called after the Thk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Thk_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Thk"); }],
        /// <field>
        /// Called after the Width content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Width_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Width"); }],
        /// <field>
        /// Called after the DisplayPartNoForMIOfferNew content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DisplayPartNoForMIOfferNew_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("DisplayPartNoForMIOfferNew"); }],
        /// <field>
        /// Called after the DisplayPartNoForMIOfferNewTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DisplayPartNoForMIOfferNewTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("DisplayPartNoForMIOfferNewTemplate"); }],
        /// <field>
        /// Called after the Part_No1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Part_No1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Part_No1"); }],
        /// <field>
        /// Called after the Drg_ID_l2_DrgList1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_l2_DrgList1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Drg_ID_l2_DrgList1"); }],
        /// <field>
        /// Called after the Sapcode1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Sapcode1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Sapcode1"); }],
        /// <field>
        /// Called after the Mat_Desc1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Mat_Desc1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Mat_Desc1"); }],
        /// <field>
        /// Called after the SizeDesc1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SizeDesc1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("SizeDesc1"); }],
        /// <field>
        /// Called after the Qty_Req1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Qty_Req1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Qty_Req1"); }],
        /// <field>
        /// Called after the RevID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RevID1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("RevID1"); }],
        /// <field>
        /// Called after the Rev1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Rev1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Rev1"); }],
        /// <field>
        /// Called after the Sheet_No1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Sheet_No1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Sheet_No1"); }],
        /// <field>
        /// Called after the Total_Sheets1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Total_Sheets1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Total_Sheets1"); }],
        /// <field>
        /// Called after the Module_ID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Module_ID1"); }],
        /// <field>
        /// Called after the Project_ID_l2_Project1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_ID_l2_Project1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Project_ID_l2_Project1"); }],
        /// <field>
        /// Called after the Acc_Qty1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Acc_Qty1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Acc_Qty1"); }],
        /// <field>
        /// Called after the Accepted1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Accepted1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Accepted1"); }],
        /// <field>
        /// Called after the Length1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Length1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Length1"); }],
        /// <field>
        /// Called after the Thk1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Thk1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Thk1"); }],
        /// <field>
        /// Called after the Width1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Width1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_MPI_Detail_Off().findContentItem("Width1"); }]
    });

    lightSwitchApplication.AddEditsps_NDEReq.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_NDEReq
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_NDEReq,
            data: lightSwitchApplication.AddEditsps_NDEReq,
            value: lightSwitchApplication.AddEditsps_NDEReq
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_NDEReq,
            data: lightSwitchApplication.AddEditsps_NDEReq,
            value: lightSwitchApplication.sps_NDEReq
        },
        DrgNoProperty: {
            _$class: msls.ContentItem,
            _$name: "DrgNoProperty",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_NDEReq,
            data: lightSwitchApplication.sps_NDEReq,
            value: lightSwitchApplication.sps_view_getDrgNo_for_ndeOffer
        },
        sps_view_getDrgNo_for_ndeOffer: {
            _$class: msls.ContentItem,
            _$name: "sps_view_getDrgNo_for_ndeOffer",
            _$parentName: "DrgNoProperty",
            screen: lightSwitchApplication.AddEditsps_NDEReq,
            data: lightSwitchApplication.sps_view_getDrgNo_for_ndeOffer,
            value: lightSwitchApplication.sps_view_getDrgNo_for_ndeOffer
        },
        sps_NDEReqDets: {
            _$class: msls.ContentItem,
            _$name: "sps_NDEReqDets",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_NDEReq,
            data: lightSwitchApplication.AddEditsps_NDEReq,
            value: lightSwitchApplication.AddEditsps_NDEReq
        },
        sps_NDEReqDets1: {
            _$class: msls.ContentItem,
            _$name: "sps_NDEReqDets1",
            _$parentName: "sps_NDEReqDets",
            screen: lightSwitchApplication.AddEditsps_NDEReq,
            data: lightSwitchApplication.AddEditsps_NDEReq,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditsps_NDEReq,
                _$entry: {
                    elementType: lightSwitchApplication.sps_NDEReqDet
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "sps_NDEReqDets1",
            screen: lightSwitchApplication.AddEditsps_NDEReq,
            data: lightSwitchApplication.sps_NDEReqDet,
            value: lightSwitchApplication.sps_NDEReqDet
        },
        NDE_Req_No_l2_NDEReq: {
            _$class: msls.ContentItem,
            _$name: "NDE_Req_No_l2_NDEReq",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_NDEReq,
            data: lightSwitchApplication.sps_NDEReqDet,
            value: String
        },
        Joint_ID_l2_Joints: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID_l2_Joints",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_NDEReq,
            data: lightSwitchApplication.sps_NDEReqDet,
            value: String
        },
        RR_WVF_No: {
            _$class: msls.ContentItem,
            _$name: "RR_WVF_No",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_NDEReq,
            data: lightSwitchApplication.sps_NDEReqDet,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_NDEReq
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditsps_NDEReq, {
        /// <field>
        /// Called when a new AddEditsps_NDEReq screen is created.
        /// <br/>created(msls.application.AddEditsps_NDEReq screen)
        /// </field>
        created: [lightSwitchApplication.AddEditsps_NDEReq],
        /// <field>
        /// Called before changes on an active AddEditsps_NDEReq screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditsps_NDEReq screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditsps_NDEReq],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq().findContentItem("columns"); }],
        /// <field>
        /// Called after the DrgNoProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DrgNoProperty_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq().findContentItem("DrgNoProperty"); }],
        /// <field>
        /// Called after the sps_view_getDrgNo_for_ndeOffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_view_getDrgNo_for_ndeOffer_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq().findContentItem("sps_view_getDrgNo_for_ndeOffer"); }],
        /// <field>
        /// Called after the sps_NDEReqDets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_NDEReqDets_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq().findContentItem("sps_NDEReqDets"); }],
        /// <field>
        /// Called after the sps_NDEReqDets1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_NDEReqDets1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq().findContentItem("sps_NDEReqDets1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq().findContentItem("rows"); }],
        /// <field>
        /// Called after the NDE_Req_No_l2_NDEReq content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NDE_Req_No_l2_NDEReq_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq().findContentItem("NDE_Req_No_l2_NDEReq"); }],
        /// <field>
        /// Called after the Joint_ID_l2_Joints content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID_l2_Joints_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq().findContentItem("Joint_ID_l2_Joints"); }],
        /// <field>
        /// Called after the RR_WVF_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RR_WVF_No_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_NDEReq().findContentItem("RR_WVF_No"); }]
    });

    lightSwitchApplication.AddEditsps_PWHT.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_PWHT
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_PWHT,
            data: lightSwitchApplication.AddEditsps_PWHT,
            value: lightSwitchApplication.AddEditsps_PWHT
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_PWHT,
            data: lightSwitchApplication.AddEditsps_PWHT,
            value: lightSwitchApplication.sps_PWHT
        },
        sps_PWHTDetails: {
            _$class: msls.ContentItem,
            _$name: "sps_PWHTDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_PWHT,
            data: lightSwitchApplication.AddEditsps_PWHT,
            value: lightSwitchApplication.AddEditsps_PWHT
        },
        sps_PWHTDetails1: {
            _$class: msls.ContentItem,
            _$name: "sps_PWHTDetails1",
            _$parentName: "sps_PWHTDetails",
            screen: lightSwitchApplication.AddEditsps_PWHT,
            data: lightSwitchApplication.AddEditsps_PWHT,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditsps_PWHT,
                _$entry: {
                    elementType: lightSwitchApplication.sps_PWHTDetail
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "sps_PWHTDetails1",
            screen: lightSwitchApplication.AddEditsps_PWHT,
            data: lightSwitchApplication.sps_PWHTDetail,
            value: lightSwitchApplication.sps_PWHTDetail
        },
        PWHT_No_l2_PWHT: {
            _$class: msls.ContentItem,
            _$name: "PWHT_No_l2_PWHT",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_PWHT,
            data: lightSwitchApplication.sps_PWHTDetail,
            value: String
        },
        Joint_ID_l2_Joints: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID_l2_Joints",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_PWHT,
            data: lightSwitchApplication.sps_PWHTDetail,
            value: String
        },
        Drg_ID_l2_DrgList: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_l2_DrgList",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_PWHT,
            data: lightSwitchApplication.sps_PWHTDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_PWHT
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditsps_PWHT, {
        /// <field>
        /// Called when a new AddEditsps_PWHT screen is created.
        /// <br/>created(msls.application.AddEditsps_PWHT screen)
        /// </field>
        created: [lightSwitchApplication.AddEditsps_PWHT],
        /// <field>
        /// Called before changes on an active AddEditsps_PWHT screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditsps_PWHT screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditsps_PWHT],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHT().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHT().findContentItem("columns"); }],
        /// <field>
        /// Called after the sps_PWHTDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_PWHTDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHT().findContentItem("sps_PWHTDetails"); }],
        /// <field>
        /// Called after the sps_PWHTDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_PWHTDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHT().findContentItem("sps_PWHTDetails1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHT().findContentItem("rows"); }],
        /// <field>
        /// Called after the PWHT_No_l2_PWHT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PWHT_No_l2_PWHT_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHT().findContentItem("PWHT_No_l2_PWHT"); }],
        /// <field>
        /// Called after the Joint_ID_l2_Joints content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID_l2_Joints_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHT().findContentItem("Joint_ID_l2_Joints"); }],
        /// <field>
        /// Called after the Drg_ID_l2_DrgList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_l2_DrgList_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHT().findContentItem("Drg_ID_l2_DrgList"); }]
    });

    lightSwitchApplication.AddEditsps_PWHTDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.AddEditsps_PWHTDetail,
            value: lightSwitchApplication.AddEditsps_PWHTDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.AddEditsps_PWHTDetail,
            value: lightSwitchApplication.sps_PWHTDetail
        },
        DrgNoProperty: {
            _$class: msls.ContentItem,
            _$name: "DrgNoProperty",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_PWHTDetail,
            value: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT
        },
        sps_View_Get_Drg_No_For_PWHT: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Drg_No_For_PWHT",
            _$parentName: "DrgNoProperty",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT
        },
        JointNoProperty: {
            _$class: msls.ContentItem,
            _$name: "JointNoProperty",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_PWHTDetail,
            value: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT
        },
        sps_View_Get_Drg_No_For_PWHT1: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Drg_No_For_PWHT1",
            _$parentName: "JointNoProperty",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT
        },
        Drg_ID: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: String
        },
        Material1: {
            _$class: msls.ContentItem,
            _$name: "Material1",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: String
        },
        Project_ID: {
            _$class: msls.ContentItem,
            _$name: "Project_ID",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: String
        },
        Project_Name: {
            _$class: msls.ContentItem,
            _$name: "Project_Name",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: String
        },
        Module_ID: {
            _$class: msls.ContentItem,
            _$name: "Module_ID",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: String
        },
        Module_Name: {
            _$class: msls.ContentItem,
            _$name: "Module_Name",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: String
        },
        Drg_ID_l2_DrgList: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID_l2_DrgList",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: String
        },
        drg_no: {
            _$class: msls.ContentItem,
            _$name: "drg_no",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: String
        },
        Joint_ID: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: String
        },
        Joint_No: {
            _$class: msls.ContentItem,
            _$name: "Joint_No",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: String
        },
        flg_PWHT: {
            _$class: msls.ContentItem,
            _$name: "flg_PWHT",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: Boolean
        },
        Insp_Agency: {
            _$class: msls.ContentItem,
            _$name: "Insp_Agency",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: String
        },
        DSC: {
            _$class: msls.ContentItem,
            _$name: "DSC",
            _$parentName: "sps_View_Get_Drg_No_For_PWHT1",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_PWHT,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_PWHTDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditsps_PWHTDetail, {
        /// <field>
        /// Called when a new AddEditsps_PWHTDetail screen is created.
        /// <br/>created(msls.application.AddEditsps_PWHTDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditsps_PWHTDetail],
        /// <field>
        /// Called before changes on an active AddEditsps_PWHTDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditsps_PWHTDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditsps_PWHTDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the DrgNoProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DrgNoProperty_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("DrgNoProperty"); }],
        /// <field>
        /// Called after the sps_View_Get_Drg_No_For_PWHT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Drg_No_For_PWHT_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("sps_View_Get_Drg_No_For_PWHT"); }],
        /// <field>
        /// Called after the JointNoProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JointNoProperty_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("JointNoProperty"); }],
        /// <field>
        /// Called after the sps_View_Get_Drg_No_For_PWHT1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Drg_No_For_PWHT1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("sps_View_Get_Drg_No_For_PWHT1"); }],
        /// <field>
        /// Called after the Drg_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("Drg_ID"); }],
        /// <field>
        /// Called after the Material1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("Material1"); }],
        /// <field>
        /// Called after the Project_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("Project_ID"); }],
        /// <field>
        /// Called after the Project_Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("Project_Name"); }],
        /// <field>
        /// Called after the Module_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("Module_ID"); }],
        /// <field>
        /// Called after the Module_Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("Module_Name"); }],
        /// <field>
        /// Called after the Drg_ID_l2_DrgList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_l2_DrgList_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("Drg_ID_l2_DrgList"); }],
        /// <field>
        /// Called after the drg_no content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        drg_no_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("drg_no"); }],
        /// <field>
        /// Called after the Joint_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("Joint_ID"); }],
        /// <field>
        /// Called after the Joint_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("Joint_No"); }],
        /// <field>
        /// Called after the flg_PWHT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        flg_PWHT_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("flg_PWHT"); }],
        /// <field>
        /// Called after the Insp_Agency content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Insp_Agency_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("Insp_Agency"); }],
        /// <field>
        /// Called after the DSC content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DSC_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_PWHTDetail().findContentItem("DSC"); }]
    });

    lightSwitchApplication.AddEditsps_WVF.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_WVF
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_WVF,
            data: lightSwitchApplication.AddEditsps_WVF,
            value: lightSwitchApplication.AddEditsps_WVF
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_WVF,
            data: lightSwitchApplication.AddEditsps_WVF,
            value: lightSwitchApplication.sps_WVF
        },
        sps_WVFDetails: {
            _$class: msls.ContentItem,
            _$name: "sps_WVFDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_WVF,
            data: lightSwitchApplication.AddEditsps_WVF,
            value: lightSwitchApplication.AddEditsps_WVF
        },
        sps_WVFDetails1: {
            _$class: msls.ContentItem,
            _$name: "sps_WVFDetails1",
            _$parentName: "sps_WVFDetails",
            screen: lightSwitchApplication.AddEditsps_WVF,
            data: lightSwitchApplication.AddEditsps_WVF,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditsps_WVF,
                _$entry: {
                    elementType: lightSwitchApplication.sps_WVFDetail
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "sps_WVFDetails1",
            screen: lightSwitchApplication.AddEditsps_WVF,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_WVFDetail
        },
        WVF_No_l2_WVF: {
            _$class: msls.ContentItem,
            _$name: "WVF_No_l2_WVF",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_WVF,
            data: lightSwitchApplication.sps_WVFDetail,
            value: String
        },
        FTU_No_l2_FTU: {
            _$class: msls.ContentItem,
            _$name: "FTU_No_l2_FTU",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_WVF,
            data: lightSwitchApplication.sps_WVFDetail,
            value: String
        },
        Joint_ID_l2_Joints: {
            _$class: msls.ContentItem,
            _$name: "Joint_ID_l2_Joints",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditsps_WVF,
            data: lightSwitchApplication.sps_WVFDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_WVF
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditsps_WVF, {
        /// <field>
        /// Called when a new AddEditsps_WVF screen is created.
        /// <br/>created(msls.application.AddEditsps_WVF screen)
        /// </field>
        created: [lightSwitchApplication.AddEditsps_WVF],
        /// <field>
        /// Called before changes on an active AddEditsps_WVF screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditsps_WVF screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditsps_WVF],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF().findContentItem("columns"); }],
        /// <field>
        /// Called after the sps_WVFDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_WVFDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF().findContentItem("sps_WVFDetails"); }],
        /// <field>
        /// Called after the sps_WVFDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_WVFDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF().findContentItem("sps_WVFDetails1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF().findContentItem("rows"); }],
        /// <field>
        /// Called after the WVF_No_l2_WVF content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVF_No_l2_WVF_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF().findContentItem("WVF_No_l2_WVF"); }],
        /// <field>
        /// Called after the FTU_No_l2_FTU content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FTU_No_l2_FTU_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF().findContentItem("FTU_No_l2_FTU"); }],
        /// <field>
        /// Called after the Joint_ID_l2_Joints content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_ID_l2_Joints_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVF().findContentItem("Joint_ID_l2_Joints"); }]
    });

    lightSwitchApplication.AddEditsps_WVFDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_WVFDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.AddEditsps_WVFDetail,
            value: lightSwitchApplication.AddEditsps_WVFDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.AddEditsps_WVFDetail,
            value: lightSwitchApplication.sps_WVFDetail
        },
        DrgNoProperty: {
            _$class: msls.ContentItem,
            _$name: "DrgNoProperty",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_View_Get_Drg_No_For_WVF
        },
        sps_View_Get_Drg_No_For_WVF: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Drg_No_For_WVF",
            _$parentName: "DrgNoProperty",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Drg_No_For_WVF,
            value: lightSwitchApplication.sps_View_Get_Drg_No_For_WVF
        },
        JointNoProperty: {
            _$class: msls.ContentItem,
            _$name: "JointNoProperty",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF
        },
        sps_View_Get_Joint_No_For_WVF: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Joint_No_For_WVF",
            _$parentName: "JointNoProperty",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF
        },
        Project_ID: {
            _$class: msls.ContentItem,
            _$name: "Project_ID",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Module_ID: {
            _$class: msls.ContentItem,
            _$name: "Module_ID",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Drg_ID: {
            _$class: msls.ContentItem,
            _$name: "Drg_ID",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Joint_No: {
            _$class: msls.ContentItem,
            _$name: "Joint_No",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Joint_Config: {
            _$class: msls.ContentItem,
            _$name: "Joint_Config",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        LenSize: {
            _$class: msls.ContentItem,
            _$name: "LenSize",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Length1: {
            _$class: msls.ContentItem,
            _$name: "Length1",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Thickness1: {
            _$class: msls.ContentItem,
            _$name: "Thickness1",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Material: {
            _$class: msls.ContentItem,
            _$name: "Material",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Weld_Process: {
            _$class: msls.ContentItem,
            _$name: "Weld_Process",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        WPS: {
            _$class: msls.ContentItem,
            _$name: "WPS",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        FTUStatus: {
            _$class: msls.ContentItem,
            _$name: "FTUStatus",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        WVFStatus: {
            _$class: msls.ContentItem,
            _$name: "WVFStatus",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Status_WVF: {
            _$class: msls.ContentItem,
            _$name: "Status_WVF",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: Number
        },
        Status_RT: {
            _$class: msls.ContentItem,
            _$name: "Status_RT",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Status_UT: {
            _$class: msls.ContentItem,
            _$name: "Status_UT",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Status_MT: {
            _$class: msls.ContentItem,
            _$name: "Status_MT",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Status_PT: {
            _$class: msls.ContentItem,
            _$name: "Status_PT",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Status_PA_UT: {
            _$class: msls.ContentItem,
            _$name: "Status_PA_UT",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Status_TOFD_UT: {
            _$class: msls.ContentItem,
            _$name: "Status_TOFD_UT",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Joint_Category: {
            _$class: msls.ContentItem,
            _$name: "Joint_Category",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Desg: {
            _$class: msls.ContentItem,
            _$name: "Desg",
            _$parentName: "sps_View_Get_Joint_No_For_WVF",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Joint_No_For_WVF,
            value: String
        },
        Welder1: {
            _$class: msls.ContentItem,
            _$name: "Welder1",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        sps_View_Get_Welder_For_WVF: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Welder_For_WVF",
            _$parentName: "Welder1",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Welder_For_WVF,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        Welder2: {
            _$class: msls.ContentItem,
            _$name: "Welder2",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        sps_View_Get_Welder_For_WVF1: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Welder_For_WVF1",
            _$parentName: "Welder2",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Welder_For_WVF,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        Welder3: {
            _$class: msls.ContentItem,
            _$name: "Welder3",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        sps_View_Get_Welder_For_WVF2: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Welder_For_WVF2",
            _$parentName: "Welder3",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Welder_For_WVF,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        Welder4: {
            _$class: msls.ContentItem,
            _$name: "Welder4",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        sps_View_Get_Welder_For_WVF3: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Welder_For_WVF3",
            _$parentName: "Welder4",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Welder_For_WVF,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        Welder5: {
            _$class: msls.ContentItem,
            _$name: "Welder5",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        sps_View_Get_Welder_For_WVF4: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Welder_For_WVF4",
            _$parentName: "Welder5",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Welder_For_WVF,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        Welder6: {
            _$class: msls.ContentItem,
            _$name: "Welder6",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        sps_View_Get_Welder_For_WVF5: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Welder_For_WVF5",
            _$parentName: "Welder6",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Welder_For_WVF,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        Welder7: {
            _$class: msls.ContentItem,
            _$name: "Welder7",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        sps_View_Get_Welder_For_WVF6: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Welder_For_WVF6",
            _$parentName: "Welder7",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Welder_For_WVF,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        Welder8: {
            _$class: msls.ContentItem,
            _$name: "Welder8",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        sps_View_Get_Welder_For_WVF7: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Welder_For_WVF7",
            _$parentName: "Welder8",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Welder_For_WVF,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        Welder9: {
            _$class: msls.ContentItem,
            _$name: "Welder9",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        sps_View_Get_Welder_For_WVF8: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Welder_For_WVF8",
            _$parentName: "Welder9",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Welder_For_WVF,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        Welder10: {
            _$class: msls.ContentItem,
            _$name: "Welder10",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_WVFDetail,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        sps_View_Get_Welder_For_WVF9: {
            _$class: msls.ContentItem,
            _$name: "sps_View_Get_Welder_For_WVF9",
            _$parentName: "Welder10",
            screen: lightSwitchApplication.AddEditsps_WVFDetail,
            data: lightSwitchApplication.sps_View_Get_Welder_For_WVF,
            value: lightSwitchApplication.sps_View_Get_Welder_For_WVF
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditsps_WVFDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditsps_WVFDetail, {
        /// <field>
        /// Called when a new AddEditsps_WVFDetail screen is created.
        /// <br/>created(msls.application.AddEditsps_WVFDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditsps_WVFDetail],
        /// <field>
        /// Called before changes on an active AddEditsps_WVFDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditsps_WVFDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditsps_WVFDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the DrgNoProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DrgNoProperty_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("DrgNoProperty"); }],
        /// <field>
        /// Called after the sps_View_Get_Drg_No_For_WVF content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Drg_No_For_WVF_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("sps_View_Get_Drg_No_For_WVF"); }],
        /// <field>
        /// Called after the JointNoProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JointNoProperty_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("JointNoProperty"); }],
        /// <field>
        /// Called after the sps_View_Get_Joint_No_For_WVF content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Joint_No_For_WVF_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("sps_View_Get_Joint_No_For_WVF"); }],
        /// <field>
        /// Called after the Project_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Project_ID"); }],
        /// <field>
        /// Called after the Module_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Module_ID"); }],
        /// <field>
        /// Called after the Drg_ID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Drg_ID_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Drg_ID"); }],
        /// <field>
        /// Called after the Joint_No content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_No_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Joint_No"); }],
        /// <field>
        /// Called after the Joint_Config content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_Config_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Joint_Config"); }],
        /// <field>
        /// Called after the LenSize content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LenSize_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("LenSize"); }],
        /// <field>
        /// Called after the Length1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Length1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Length1"); }],
        /// <field>
        /// Called after the Thickness1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Thickness1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Thickness1"); }],
        /// <field>
        /// Called after the Material content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Material_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Material"); }],
        /// <field>
        /// Called after the Weld_Process content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Weld_Process_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Weld_Process"); }],
        /// <field>
        /// Called after the WPS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WPS_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("WPS"); }],
        /// <field>
        /// Called after the FTUStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FTUStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("FTUStatus"); }],
        /// <field>
        /// Called after the WVFStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVFStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("WVFStatus"); }],
        /// <field>
        /// Called after the Status_WVF content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_WVF_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Status_WVF"); }],
        /// <field>
        /// Called after the Status_RT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_RT_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Status_RT"); }],
        /// <field>
        /// Called after the Status_UT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_UT_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Status_UT"); }],
        /// <field>
        /// Called after the Status_MT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_MT_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Status_MT"); }],
        /// <field>
        /// Called after the Status_PT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_PT_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Status_PT"); }],
        /// <field>
        /// Called after the Status_PA_UT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_PA_UT_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Status_PA_UT"); }],
        /// <field>
        /// Called after the Status_TOFD_UT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_TOFD_UT_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Status_TOFD_UT"); }],
        /// <field>
        /// Called after the Joint_Category content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Joint_Category_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Joint_Category"); }],
        /// <field>
        /// Called after the Desg content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Desg_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Desg"); }],
        /// <field>
        /// Called after the Welder1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Welder1"); }],
        /// <field>
        /// Called after the sps_View_Get_Welder_For_WVF content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Welder_For_WVF_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("sps_View_Get_Welder_For_WVF"); }],
        /// <field>
        /// Called after the Welder2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Welder2"); }],
        /// <field>
        /// Called after the sps_View_Get_Welder_For_WVF1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Welder_For_WVF1_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("sps_View_Get_Welder_For_WVF1"); }],
        /// <field>
        /// Called after the Welder3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder3_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Welder3"); }],
        /// <field>
        /// Called after the sps_View_Get_Welder_For_WVF2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Welder_For_WVF2_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("sps_View_Get_Welder_For_WVF2"); }],
        /// <field>
        /// Called after the Welder4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder4_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Welder4"); }],
        /// <field>
        /// Called after the sps_View_Get_Welder_For_WVF3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Welder_For_WVF3_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("sps_View_Get_Welder_For_WVF3"); }],
        /// <field>
        /// Called after the Welder5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder5_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Welder5"); }],
        /// <field>
        /// Called after the sps_View_Get_Welder_For_WVF4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Welder_For_WVF4_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("sps_View_Get_Welder_For_WVF4"); }],
        /// <field>
        /// Called after the Welder6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder6_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Welder6"); }],
        /// <field>
        /// Called after the sps_View_Get_Welder_For_WVF5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Welder_For_WVF5_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("sps_View_Get_Welder_For_WVF5"); }],
        /// <field>
        /// Called after the Welder7 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder7_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Welder7"); }],
        /// <field>
        /// Called after the sps_View_Get_Welder_For_WVF6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Welder_For_WVF6_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("sps_View_Get_Welder_For_WVF6"); }],
        /// <field>
        /// Called after the Welder8 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder8_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Welder8"); }],
        /// <field>
        /// Called after the sps_View_Get_Welder_For_WVF7 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Welder_For_WVF7_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("sps_View_Get_Welder_For_WVF7"); }],
        /// <field>
        /// Called after the Welder9 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder9_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Welder9"); }],
        /// <field>
        /// Called after the sps_View_Get_Welder_For_WVF8 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Welder_For_WVF8_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("sps_View_Get_Welder_For_WVF8"); }],
        /// <field>
        /// Called after the Welder10 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Welder10_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("Welder10"); }],
        /// <field>
        /// Called after the sps_View_Get_Welder_For_WVF9 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_View_Get_Welder_For_WVF9_postRender: [$element, function () { return new lightSwitchApplication.AddEditsps_WVFDetail().findContentItem("sps_View_Get_Welder_For_WVF9"); }]
    });

    lightSwitchApplication.Browsesps_Projects.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Browsesps_Projects
        },
        sps_ProjectList: {
            _$class: msls.ContentItem,
            _$name: "sps_ProjectList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Browsesps_Projects,
            data: lightSwitchApplication.Browsesps_Projects,
            value: lightSwitchApplication.Browsesps_Projects
        },
        ProjectProperty: {
            _$class: msls.ContentItem,
            _$name: "ProjectProperty",
            _$parentName: "sps_ProjectList",
            screen: lightSwitchApplication.Browsesps_Projects,
            data: lightSwitchApplication.Browsesps_Projects,
            value: lightSwitchApplication.sps_Project
        },
        ProjectPropertyTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProjectPropertyTemplate",
            _$parentName: "ProjectProperty",
            screen: lightSwitchApplication.Browsesps_Projects,
            data: lightSwitchApplication.sps_Project,
            value: lightSwitchApplication.sps_Project
        },
        ModuleProperty: {
            _$class: msls.ContentItem,
            _$name: "ModuleProperty",
            _$parentName: "sps_ProjectList",
            screen: lightSwitchApplication.Browsesps_Projects,
            data: lightSwitchApplication.Browsesps_Projects,
            value: lightSwitchApplication.sps_Module
        },
        ModulePropertyTemplate: {
            _$class: msls.ContentItem,
            _$name: "ModulePropertyTemplate",
            _$parentName: "ModuleProperty",
            screen: lightSwitchApplication.Browsesps_Projects,
            data: lightSwitchApplication.sps_Module,
            value: lightSwitchApplication.sps_Module
        },
        Module_Name: {
            _$class: msls.ContentItem,
            _$name: "Module_Name",
            _$parentName: "ModulePropertyTemplate",
            screen: lightSwitchApplication.Browsesps_Projects,
            data: lightSwitchApplication.sps_Module,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Browsesps_Projects
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Browsesps_Projects, {
        /// <field>
        /// Called when a new Browsesps_Projects screen is created.
        /// <br/>created(msls.application.Browsesps_Projects screen)
        /// </field>
        created: [lightSwitchApplication.Browsesps_Projects],
        /// <field>
        /// Called before changes on an active Browsesps_Projects screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Browsesps_Projects screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Browsesps_Projects],
        /// <field>
        /// Called after the sps_ProjectList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sps_ProjectList_postRender: [$element, function () { return new lightSwitchApplication.Browsesps_Projects().findContentItem("sps_ProjectList"); }],
        /// <field>
        /// Called after the ProjectProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectProperty_postRender: [$element, function () { return new lightSwitchApplication.Browsesps_Projects().findContentItem("ProjectProperty"); }],
        /// <field>
        /// Called after the ProjectPropertyTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectPropertyTemplate_postRender: [$element, function () { return new lightSwitchApplication.Browsesps_Projects().findContentItem("ProjectPropertyTemplate"); }],
        /// <field>
        /// Called after the ModuleProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModuleProperty_postRender: [$element, function () { return new lightSwitchApplication.Browsesps_Projects().findContentItem("ModuleProperty"); }],
        /// <field>
        /// Called after the ModulePropertyTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModulePropertyTemplate_postRender: [$element, function () { return new lightSwitchApplication.Browsesps_Projects().findContentItem("ModulePropertyTemplate"); }],
        /// <field>
        /// Called after the Module_Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Module_Name_postRender: [$element, function () { return new lightSwitchApplication.Browsesps_Projects().findContentItem("Module_Name"); }]
    });

    lightSwitchApplication.Menu.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Menu
        },
        Offer: {
            _$class: msls.ContentItem,
            _$name: "Offer",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Menu,
            data: lightSwitchApplication.Menu,
            value: lightSwitchApplication.Menu
        },
        MI: {
            _$class: msls.ContentItem,
            _$name: "MI",
            _$parentName: "Offer",
            screen: lightSwitchApplication.Menu
        },
        Fitup: {
            _$class: msls.ContentItem,
            _$name: "Fitup",
            _$parentName: "Offer",
            screen: lightSwitchApplication.Menu
        },
        WVisual: {
            _$class: msls.ContentItem,
            _$name: "WVisual",
            _$parentName: "Offer",
            screen: lightSwitchApplication.Menu
        },
        PWHT: {
            _$class: msls.ContentItem,
            _$name: "PWHT",
            _$parentName: "Offer",
            screen: lightSwitchApplication.Menu
        },
        NDERequest: {
            _$class: msls.ContentItem,
            _$name: "NDERequest",
            _$parentName: "Offer",
            screen: lightSwitchApplication.Menu
        },
        PMI: {
            _$class: msls.ContentItem,
            _$name: "PMI",
            _$parentName: "Offer",
            screen: lightSwitchApplication.Menu
        },
        Delete: {
            _$class: msls.ContentItem,
            _$name: "Delete",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Menu,
            data: lightSwitchApplication.Menu,
            value: lightSwitchApplication.Menu
        },
        PWHTREQDel: {
            _$class: msls.ContentItem,
            _$name: "PWHTREQDel",
            _$parentName: "Delete",
            screen: lightSwitchApplication.Menu
        },
        WVisualDel: {
            _$class: msls.ContentItem,
            _$name: "WVisualDel",
            _$parentName: "Delete",
            screen: lightSwitchApplication.Menu
        },
        FitupDel: {
            _$class: msls.ContentItem,
            _$name: "FitupDel",
            _$parentName: "Delete",
            screen: lightSwitchApplication.Menu
        },
        MIDel: {
            _$class: msls.ContentItem,
            _$name: "MIDel",
            _$parentName: "Delete",
            screen: lightSwitchApplication.Menu
        },
        Inspect: {
            _$class: msls.ContentItem,
            _$name: "Inspect",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Menu,
            data: lightSwitchApplication.Menu,
            value: lightSwitchApplication.Menu
        },
        MIInspect: {
            _$class: msls.ContentItem,
            _$name: "MIInspect",
            _$parentName: "Inspect",
            screen: lightSwitchApplication.Menu
        },
        HardnessInspect: {
            _$class: msls.ContentItem,
            _$name: "HardnessInspect",
            _$parentName: "Inspect",
            screen: lightSwitchApplication.Menu
        },
        FitUpInspect: {
            _$class: msls.ContentItem,
            _$name: "FitUpInspect",
            _$parentName: "Inspect",
            screen: lightSwitchApplication.Menu
        },
        WVisualInspect: {
            _$class: msls.ContentItem,
            _$name: "WVisualInspect",
            _$parentName: "Inspect",
            screen: lightSwitchApplication.Menu
        },
        PWHTInspect: {
            _$class: msls.ContentItem,
            _$name: "PWHTInspect",
            _$parentName: "Inspect",
            screen: lightSwitchApplication.Menu
        },
        PMIInspect: {
            _$class: msls.ContentItem,
            _$name: "PMIInspect",
            _$parentName: "Inspect",
            screen: lightSwitchApplication.Menu
        },
        Buffer: {
            _$class: msls.ContentItem,
            _$name: "Buffer",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Menu,
            data: lightSwitchApplication.Menu,
            value: lightSwitchApplication.Menu
        },
        WELBuffer: {
            _$class: msls.ContentItem,
            _$name: "WELBuffer",
            _$parentName: "Buffer",
            screen: lightSwitchApplication.Menu
        },
        RRBuffer: {
            _$class: msls.ContentItem,
            _$name: "RRBuffer",
            _$parentName: "Buffer",
            screen: lightSwitchApplication.Menu
        },
        NDE100Buffer: {
            _$class: msls.ContentItem,
            _$name: "NDE100Buffer",
            _$parentName: "Buffer",
            screen: lightSwitchApplication.Menu
        },
        NDEBuffer: {
            _$class: msls.ContentItem,
            _$name: "NDEBuffer",
            _$parentName: "Buffer",
            screen: lightSwitchApplication.Menu
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Menu
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Menu, {
        /// <field>
        /// Called when a new Menu screen is created.
        /// <br/>created(msls.application.Menu screen)
        /// </field>
        created: [lightSwitchApplication.Menu],
        /// <field>
        /// Called before changes on an active Menu screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Menu screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Menu],
        /// <field>
        /// Called after the Offer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Offer_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("Offer"); }],
        /// <field>
        /// Called after the MI content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MI_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("MI"); }],
        /// <field>
        /// Called after the Fitup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Fitup_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("Fitup"); }],
        /// <field>
        /// Called after the WVisual content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVisual_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("WVisual"); }],
        /// <field>
        /// Called after the PWHT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PWHT_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("PWHT"); }],
        /// <field>
        /// Called after the NDERequest content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NDERequest_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("NDERequest"); }],
        /// <field>
        /// Called after the PMI content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMI_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("PMI"); }],
        /// <field>
        /// Called after the Delete content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Delete_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("Delete"); }],
        /// <field>
        /// Called after the PWHTREQDel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PWHTREQDel_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("PWHTREQDel"); }],
        /// <field>
        /// Called after the WVisualDel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVisualDel_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("WVisualDel"); }],
        /// <field>
        /// Called after the FitupDel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FitupDel_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("FitupDel"); }],
        /// <field>
        /// Called after the MIDel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MIDel_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("MIDel"); }],
        /// <field>
        /// Called after the Inspect content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Inspect_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("Inspect"); }],
        /// <field>
        /// Called after the MIInspect content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MIInspect_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("MIInspect"); }],
        /// <field>
        /// Called after the HardnessInspect content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HardnessInspect_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("HardnessInspect"); }],
        /// <field>
        /// Called after the FitUpInspect content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FitUpInspect_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("FitUpInspect"); }],
        /// <field>
        /// Called after the WVisualInspect content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WVisualInspect_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("WVisualInspect"); }],
        /// <field>
        /// Called after the PWHTInspect content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PWHTInspect_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("PWHTInspect"); }],
        /// <field>
        /// Called after the PMIInspect content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMIInspect_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("PMIInspect"); }],
        /// <field>
        /// Called after the Buffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Buffer_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("Buffer"); }],
        /// <field>
        /// Called after the WELBuffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WELBuffer_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("WELBuffer"); }],
        /// <field>
        /// Called after the RRBuffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RRBuffer_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("RRBuffer"); }],
        /// <field>
        /// Called after the NDE100Buffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NDE100Buffer_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("NDE100Buffer"); }],
        /// <field>
        /// Called after the NDEBuffer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NDEBuffer_postRender: [$element, function () { return new lightSwitchApplication.Menu().findContentItem("NDEBuffer"); }]
    });

}(msls.application));