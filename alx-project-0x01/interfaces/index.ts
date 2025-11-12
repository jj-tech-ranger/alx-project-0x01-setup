export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
}

export interface PostData {
  title: string;
  body: string;
  userId: number;
}

export interface UserData {
  name: string;
  username: string;
  email: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}
