/** Common Types */

export type QueryParameters = {
  pageNo: number;
  limit: number;
  sortOrder: string;
  sortBy: string;
  search: string;
  isActive: string | boolean;
  startDate: any;
  endDate: any;
  Brand: [];
};

export type StaticContentType = {
  staticContentEn: string;
  staticContentAr: string;
};

/** Models */

/** Login */

export type LoginModel = {
  email: string;
  password: string;
  mfaToken: string;
  name: string;
};

export type ForgetPasswordModel = {
  email: string;
  forgetPasswordmessage: string;
};

export type ResetPasswordModel = {
  resetPasswordmessage: string;
};

export type ChangePasswordModel = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

/** Global Model */

export type GlobalModel = {
  loading: boolean;
};

export type ConfigureModel = {
  mainStepper: number;
};

export type HeaderModel = {
  adminDetails: { [key: string]: any };
  imageName: string;
  imageURL: string;
  imageChanged: boolean;
};

/** Static Content Module */

export type FAQQuery = {
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: string;
};

export type StaticContentModuleModel = {
  type: string;
  faqDetails: { [key: string]: any };
  faqIdDetails: { [key: string]: any };
  bannerDetails: any;
  message: string;
  fetchFirst: boolean;
  faqContent: {
    id: string;
    title_en: string;
    content_en: string;
    title_ar: string;
    is_active: boolean;
    content_ar: string;
    created_at: string;
  };
  faqQueryParameters: FAQQuery;
  imageChanged: boolean;
};

/** Blog Management Module > Blogs */

export type Category = {
  id: string;
  title_en: string;
  title_ar: string;
};

export type BlogDatum = {
  slug: string;
  blog_id: string;
  title_en: string;
  title_ar: string;
  is_active: boolean;
  created_at: Date;
  categories: Category[];
};

export type BlogsResult = {
  data: BlogDatum[];
  page: number;
  limit: number;
  count: number;
};

export type BlogObject = {
  slug: string;
  title_en: string;
  content_en: string;
  title_ar: string;
  content_ar: string;
  image: { path: string; url: string };
  created_at: string;
  is_active: boolean;
  categories: Category[];
};

export type BlogQuery = {
  pageNo: number;
  limit: number;
  sortOrder: "";
  sortBy: string;
  isActive: string;
  startDate: string;
  endDate: string;
  search: string;
  categoryId: string;
};

export type CategoryListItem = {
  categories: Array<{
    id: string;
    title_en: string;
    title_ar: string;
    category_id: string;
    is_active: boolean;
    created_at: string;
    blog_count: number;
  }>;
  page: number;
  limit: number;
  search: string;
  count: number;
};

export type ViewBlogs = {
  blogs: BlogsResult;
  blogQueryParameters: BlogQuery;
  viewBlogPost: BlogObject;
  imageName: string;
  imageURL: string;
  imageChanged: boolean;
  categoryList: CategoryListItem;
  slug: string;
};

/** Blog Management Module > Categories */

export type CategoryQuery = {
  page_no: number;
  limit: number;
  sort_order: string;
  sort_by: string;
  is_Active: string;
  start_date: string;
  end_date: string;
  search: string;
};

export type ViewCategory = {
  category: object;
};

export type ViewCategories = {
  categories: { data: [] };
  categoryQueryParameters: CategoryQuery;
  categoryContent: {
    id: string;
    title_en: string;
    content_en: string;
    title_ar: string;
    content_ar: string;
    created_at: string;
    is_active: boolean;
  };
  viewCategoryDetails: { [key in "title_en" | "title_ar" | "content_en" | "content_ar"]: any };
  message: string;
};

export type SubAdminModuleModel = { moduleList: any[] };

/** User Management Module */

export type UserDatum = {};

export type UserResult = {
  data: UserDatum[];
  page: number;
  limit: number;
  count: number;
  search: any;
};

export type UserData = {
  country_code: string;
  created_at: string;
  email: string;
  first_name: string;
  id: string;
  is_active: any;
  last_name: string;
  phone_number: string;
  user_id: string;
};

export type UsersModel = {
  users: UserResult;
  userQueryParameters: QueryParameters;
  userData: UserData;
  message: string;
};

/** Model Management   */
/** Model Management > Common  */

export type CommonDropDown = {
  data: {}[];
  page: number;
  limit: number;
  count: number;
};

export type CommonVehicleModel = {
  brandsDropdown: CommonDropDown;
  typeDropdown: {}[];
  wheels: Array<{ [key: string]: any }>;
  interiorColors: Array<{ [key: string]: any }>;
  exteriorColors: Array<{ [key: string]: any }>;
  wheelsModel: Array<{ [key: string]: any }>;
  interiorColorsModel: Array<{ [key: string]: any }>;
  exteriorColorsModel: Array<{ [key: string]: any }>;
};

/** Model Management > Brand  */

export type BrandsModel = {
  brands: UserResult;
  brandQueryParameters: QueryParameters;
  brandData: any;
  message: string;
  imageChanged: boolean;
};

export type CareerModel = {
  career: UserResult;
  careerQueryParameters: QueryParameters;
  careerData: any;
  message: string;
  imageChanged: boolean;
  staticDepartment: any;
  staticExperience: any;
};

export type BookingsModel = {
  type: string;
  selectedStatus: Array<string>;
  bookings: BookingResult;
  bookingQueryParameters: QueryParameters;
  bookingData: BookingType;
  orderStatusData: any;
  message: string;
  imageChanged: boolean;
  docId: string;
  reject: boolean;
  cancel: boolean;
};

export type BookingType = {
  booking_details: BookingDetails;
  user_details: { [key: string]: any };
  payment_details: PaymentDetails;
  action_detail: ActionDetail;
};

export type BookingDetails = {
  order_id: string;
  created_at: string;
  estimated_delivery: string;
  status: string;
  vehicle_details: VehicleDetails;
  customization: Customization[];
  show_range: boolean;
};

export type Customization = {
  item_type: string;
  item_name: string;
};

export type VehicleDetails = {
  brand_name: string;
  model_name: string;
  product_name: string;
  model_id: string;
  model_uuid: string;
};

export type PaymentDetails = {
  transaction_id: string;
  mode: string;
  transaction_time: string;
  amount_paid: string;
  price_distribution: PriceDistribution;
};

export type ActionDetail = {
  status: string;
  delivery_date: null | string;
  registration_number: null | string;
  vin_number: null | string;
};

export type PriceDistribution = {
  vehicle_price: string;
  addOnPrices: AddOnPrice[];
  total: string;
  vatValue: string;
  vat: string;
  total_model_price: string;
  booking_amount: string;
};

export type AddOnPrice = {
  item_type: string;
  item_name: string;
  price: number;
};

export type UserDetails = {
  user_id: string | null;
  name: string;
  billing_details: BillingDetails;
  shipping_details: ShippingDetails | {};
  delivery_type: string;
  store_address: StoreAddress | {};
  customer_documents: any[];
};

export type BillingDetails = {
  billing_first_name: string;
  billing_last_name: string;
  billing_apartment_no: string;
  billing_address_line_1: string;
  billing_address_line_2: string;
  billing_city: string;
  billing_state: string;
  billing_country: string;
  billing_pincode: string;
};

export type ShippingDetails = {};

export type StoreAddress = {
  name_en: string;
  name_ar: string;
  contact_number: string;
  address: string;
  country: string;
  city: string;
  zip_code: string;
  latitude: string;
  longitude: string;
};

export type BookingResult = {
  orderStatus: Array<{ [key: string]: any }>;
  data: UserDatum[];
  page: number;
  limit: number;
  count: number;
  search: any;
};

/** Model Management > Product  */

export type ProductsModel = {
  products: UserResult;
  productQueryParameters: QueryParameters;
  productData: ProductData;
  message: string;
  imageChanged: boolean;
};

export type ProductData = {
  brand_ar: string;
  brand_en: string;
  brand_id: string;
  class_ar: string;
  class_en: string;
  class_id: string;
  description_ar: string;
  description_en: string;
  id: string;
  is_active: boolean;
  name_ar: string;
  name_en: string;
  product_id: string;
  safety_description_ar: string;
  safety_description_en: string;
  safety_images: Array<{ [key: string]: any }>;
};

/** Model Management > Model */

export type VehicleModel = {
  step: number;
  isActive: boolean;
  models: ModelResult;
  modalQueryParameters: QueryParameters;
  modelDetails: ModelDetails;
  modelForm: VehicleModelForm;
  message: string;
  modelCustomization: ModelCustomization;
  modelColorwheel: ModelColorWheel;
  modelSpecifications: ModelSpecification;
  products: ProductsResult;
  engines: EnginesResult;
  imageChangedWheel: Array<boolean>;
  imageChangedCustomization: Array<Array<boolean>>;
  brandId: string;
};

export type ModelSpecification = {
  completed_step: number;
  is_active: boolean;
  performance: {
    performance_en: string;
    performance_ar: string;
    performance_images: [
      {
        url: { path: string; url: string };
      }
    ];
  };
  specification: Array<{ [key: string]: any }>;
};

export type ModelDetails = {
  engines: { id: string; name_en: string; name_ar: string };
  name_en: string;
  name_ar: string;
  base_price_in_sr: number;
  is_featured: boolean;
  featured_images: [
    {
      url: { path: string; url: string };
    }
  ];
  is_base_model: false;
  menu_image: { path: string; url: string };
  brand: {
    id: string;
    name_en: string;
  };
  product: {
    id: string;
    name_en: string;
  };
};
export type ModelData = {
  id: string;
  name_en: string;
  model_id: string;
  name_ar: string;
  base_price_in_sr: number;
  product_name: string;
  brand_name: string;
  created_at: string;
  is_active: boolean;
};
export type ModelResult = {
  data: ModelData[];
  page: number;
  limit: number;
  count: number;
};
export type ProductsResult = {
  data: any;
  page: number;
  limit: number;
  count: number;
  search: any;
  brandId?: string;
};
export type EnginesResult = {
  data: any;
};
export type ModelCustomization = {
  customization: [];
  extended_warranty: boolean | null;
  warranty_price_in_sr: null | number;
};
export type ModelColorWheel = {
  model_id: string;
  exterior_colors: any;
  interior_colors: any;
  wheels: any;
};

export type VehicleModelForm = {
  data: UserDatum[];
};

/** Referral & Reward */

export type ReferralModel = {
  referrals: ReferralResult;
  referralQueryParameters: ReferralQueryParameters;
  referralData: ReferralData;
  refBookingsQueryParameters: ReferralQueryParameters;
};

export type ReferralData = {
  referral_code: string;
  name: string;
  amount: string;
  total_referrals: number;
  referrals: ReferralBookingData;
};

export type ReferralBookingData = {
  data: BookingReferral[];
  count: number;
  page: number;
  limit: number;
};

export type BookingReferral = {
  booking_id: string;
  name: string;
  vehicle_name_ar: string;
  vehicle_name_en: string;
  booking_date: string;
  picture_url: PictureURL | null;
};

export type ReferralResult = {
  data: Referral[];
  page: number;
  limit: number;
  count: number;
};

export type Referral = {
  id: string;
  user_id: string;
  referral_code: string;
  amount: string;
  total_referrals: number;
  name: string;
  picture_url: PictureURL | null;
};

export type PictureURL = {
  url: string;
  path: string;
};

export type ReferralQueryParameters = {
  pageNo: number;
  limit: number;
  search: string;
};

export type DashboardModel = {
  userData: any;
  bookingData: any;
  modalData: any;
};

/** Notification */
export type NotificationModel = {
  notifications: UserResult;
  notificationQueryParameters: QueryParameters;
  notificationData: any;
  message: string;
  imageChanged: boolean;
};
