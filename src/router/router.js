import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import {
    Home,
    AddBilling,
    EditBilling,
    AddFollowUp,
    EditFollowUp,
    BlogDetails,
    BlogList,
    Booking,
    BookingSuccess,
    ChangePassword,
    Checkout,
    Favourites,
    ForgotPassword,
    Invoices,
    InvoiceView,
    Login,
    PrivacyPolicy,
    TermsCondition,    
    StylistChangePassword,
    StylistDashboard,
    StylistProfileSettings,
    StylistProfile,
    Register,
    Reviews,
    ProfileSettings,
    CustomerDashboard,
    CustomerProfile,  
    MyCustomers,
    StylistList,
    Calendar,
    ScheduleTimings,
    Appointments,
    BookingService,
    StaffDashboard,
    PaymentGuide,
    BookingStylist,
    StaffChangePassword,
    EditService,
    AddService,
    EditEditService,
    DeleteService,
    EditStylist,
    DeleteStylist,
    EditEditStylist,
    AddStylist,
    PurchaseProduct,
    EditProduct,
    AddProduct,
    EditEditProduct,
    DeleteProduct,
    Accept,
    Cancel, 
    CancelBooking
} from '../pages';

import { Header, Footer } from '../_components';

import config from 'config';
// CSS Files
// Bootstrap CSS
import '../assets/plugins/bootstrap/css/bootstrap.min.css';

// Font Awesome
import '../assets/plugins/fontawesome/css/fontawesome.min.css';
import '../assets/plugins/fontawesome/css/all.min.css';

// Custom CSS
import '../assets/css/style.css';

class RouterComponent extends React.Component {
    render() {
        return (
            
            <Router basename={`${config.publicPath}`} >

                <div className="main-wrapper">
                
                    <Route render={(props) => <Header {...props} />} />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/add-billing" component={AddBilling} />
                        <Route path="/edit-billing" component={EditBilling} />
                        <Route path="/add-follow-up" component={AddFollowUp} />
                        <Route path="/edit-follow-up" component={EditFollowUp} />
                        <Route path="/blog-details" component={BlogDetails} />
                        <Route path="/blog-list" component={BlogList} />
                        <Route path="/booking" component={Booking} />
                        <Route path="/booking-success" component={BookingSuccess} />
                        <Route path="/calendar" component={Calendar} />
                        <Route path="/change-password" component={ChangePassword} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/favourites" component={Favourites} />
                        <Route path="/forgot-password" component={ForgotPassword} />
                        <Route path="/invoices" component={Invoices} />
                        <Route path="/invoice-view" component={InvoiceView} />
                        <Route path="/login" component={Login} />
                        <Route path="/privacy-policy" component={PrivacyPolicy} />
                        <Route path="/terms-condition" component={TermsCondition} />                        
                        <Route path="/stylist-change-password" component={StylistChangePassword} />
                        <Route path="/stylist-dashboard" component={StylistDashboard} />
                        <Route path="/stylist-profile-settings" component={StylistProfileSettings} />
                        <Route path="/stylist-profile" component={StylistProfile} />
                        <Route path="/register" component={Register} />
                        <Route path="/reviews" component={Reviews} />
                        <Route path="/profile-settings" component={ProfileSettings} />
                        <Route path="/customer-dashboard" component={CustomerDashboard} />
                        <Route path="/customer-profile" component={CustomerProfile} />
                        <Route path="/my-customers" component={MyCustomers} />
                        <Route path="/map-list" component={StylistList} />                        
                        <Route path="/schedule-timings" component={ScheduleTimings} />
                        <Route path="/appointments" component={Appointments} />
                        <Route path="/booking-service" component={BookingService} />
                        <Route path="/staff-dashboard" component={StaffDashboard} />
                        <Route path="/Payment-Guide" component={PaymentGuide} />
                        <Route path="/booking-stylist" component={BookingStylist} />
                        <Route path="/staff-change-password" component={StaffChangePassword} />
                        <Route path="/edit-service" component={EditService} />
                        <Route path="/add-service" component={AddService} />
                        <Route path="/edit-edit-service" component={EditEditService} />
                        <Route path="/delete-service" component={DeleteService} />
                        <Route path="/edit-stylist" component={EditStylist} />
                        <Route path="/delete-stylist" component={DeleteStylist} />
                        <Route path="/edit-edit-stylist" component={EditEditStylist} />
                        <Route path="/add-stylist" component={AddStylist} />
                        <Route path="/purchase-product" component={PurchaseProduct} />
                        <Route path="/edit-product" component={EditProduct} />
                        <Route path="/add-product" component={AddProduct} />
                        <Route path="/edit-edit-product" component={EditEditProduct} />
                        <Route path="/delete-product" component={DeleteProduct} />
                        <Route path="/accept" component={Accept} />
                        <Route path="/cancel" component={Cancel} />
                        <Route path="/cancel-booking" component={CancelBooking} />
                    </Switch>
                    <Route render={(props) => <Footer {...props} />} />
                </div>                    
            </Router>
        )
    }
}
export { RouterComponent };
