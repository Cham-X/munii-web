import { IconType } from "react-icons"


export interface CardProp {
  title: string
  text: string
}

export interface TestimonialCardProp {
  image: any
  text: string
  name: string
}

// TopBar Props 
export interface TopBarProps {
  setNavState: (state: any) => void;
}

// Sidebar props 
export interface MenuItem {
  key: string;
  icon?: IconType;
}

export interface SideBarProps {
  menuItems: MenuItem[];
  selectedItem: string;
  navState: Boolean;
  setNavState: (state: any) => void;
  onItemClick: (key: string) => void;
}


// Dashboard Layout 
export interface MenuLayoutItem {
  key: string;
  content: React.ReactNode;
  icon?: IconType;
}

export interface DashboardLayoutProps {
  menuItems: MenuLayoutItem[];
  navState: Boolean;
  setNavState: (state: any) => void;
}


// Dashboard Page props

export interface DashboardPageProps {
  setNavState: (state: any) => void;
}

//Notification Page Props

export interface NotificationPageProps {
  setNavState: (state: any) => void;
}

//Subscription Page Props

export interface SubscriptionPageProps {
  setNavState: (state: any) => void;
}
