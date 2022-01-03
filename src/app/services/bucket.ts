import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl = 'https://asset-playground-05dae.hq.spicaengine.com/api';
  Bucket.initialize(...initOptions);
}

type Rest<T extends any[]> = ((...p: T) => void) extends ((p1: infer P1, ...rest: infer R) => void) ? R : never;
type getArgs = Rest<Parameters<typeof Bucket.data.get>>;
type getAllArgs = Rest<Parameters<typeof Bucket.data.getAll>>;
type realtimeGetArgs = Rest<Parameters<typeof Bucket.data.realtime.get>>;
type realtimeGetAllArgs = Rest<Parameters<typeof Bucket.data.realtime.getAll>>;
type id = { _id: string };

export interface Courier{
  _id?: string;
  name?: string;
  current_orders?: (Order & id | string)[];
  current_vehicle?: (Vehicle & id | string);
}
export namespace courier {
  const BUCKET_ID = '61bc878f1fcf06002dc71f7e';
    export function get (...args: getArgs) {
      return Bucket.data.get<Courier & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Courier & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Courier, "_id">) {
      ['current_orders','current_vehicle'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Courier & id) {
      ['current_orders','current_vehicle'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Courier> & id
    ) {
      ['current_orders','current_vehicle'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Courier & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Courier & id>(BUCKET_ID, ...args);
      };
  }
}

export interface User{
  _id?: string;
  identity_id?: string;
  name?: string;
  surname?: string;
  phone?: string;
}
export namespace user {
  const BUCKET_ID = '61bc87901fcf06002dc71f81';
    export function get (...args: getArgs) {
      return Bucket.data.get<User & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<User & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<User, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: User & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<User> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<User & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<User & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Order{
  _id?: string;
  delivery_location?: { type: "Point", coordinates: [number,number]};
  user?: (User & id | string);
  courier?: (Courier & id | string);
  created_at?: Date | string;
  status?: ('preparing'|'delivering'|'delivered'|'cancelled');
  price?: number;
  payment_method?: ('cash'|'credit_card'|'online');
  note?: string;
  foods?: {
  _id?: string;
  name?: string;
  ingredients?: string[];
  price?: number;
  count?: number;}[];
}
export namespace order {
  const BUCKET_ID = '61bc87901fcf06002dc71f84';
    export function get (...args: getArgs) {
      return Bucket.data.get<Order & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Order & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Order, "_id">) {
      ['user','courier'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Order & id) {
      ['user','courier'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Order> & id
    ) {
      ['user','courier'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Order & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Order & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Vehicle{
  _id?: string;
  name?: string;
}
export namespace vehicle {
  const BUCKET_ID = '61bc87901fcf06002dc71f87';
    export function get (...args: getArgs) {
      return Bucket.data.get<Vehicle & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Vehicle & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Vehicle, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Vehicle & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Vehicle> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Vehicle & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Vehicle & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Ingredient{
  _id?: string;
  name?: string;
  price?: number;
  stock?: number;
  unit?: string;
  calories?: number;
}
export namespace ingredient {
  const BUCKET_ID = '61bc87901fcf06002dc71f8a';
    export function get (...args: getArgs) {
      return Bucket.data.get<Ingredient & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Ingredient & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Ingredient, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Ingredient & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Ingredient> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Ingredient & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Ingredient & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Rating{
  _id?: string;
  user?: (User & id | string);
  rating?: (1|2|3|4|5);
  comment?: string;
}
export namespace rating {
  const BUCKET_ID = '61bc87901fcf06002dc71f8d';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rating & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rating & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Rating, "_id">) {
      ['user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rating & id) {
      ['user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Rating> & id
    ) {
      ['user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Rating & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Rating & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Food{
  _id?: string;
  name?: string;
  description?: string;
  image?: string;
  original_price?: number;
  is_available?: boolean;
  ratings?: (Rating & id | string)[];
  preparation_time?: number;
  extra_ingredients?: (Ingredient & id | string)[];
  removable_ingredients?: (Ingredient & id | string)[];
  calories?: number;
  ingredients?: (Ingredient & id | string)[];
  price?: number;
}
export namespace food {
  const BUCKET_ID = '61bc87901fcf06002dc71f90';
    export function get (...args: getArgs) {
      return Bucket.data.get<Food & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Food & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Food, "_id">) {
      ['ratings','extra_ingredients','removable_ingredients','ingredients'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Food & id) {
      ['ratings','extra_ingredients','removable_ingredients','ingredients'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Food> & id
    ) {
      ['ratings','extra_ingredients','removable_ingredients','ingredients'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Food & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Food & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Discount{
  _id?: string;
  name?: string;
  foods?: (Food & id | string)[];
  from?: Date | string;
  until?: Date | string;
  discount?: number;
}
export namespace discount {
  const BUCKET_ID = '61bc87901fcf06002dc71f94';
    export function get (...args: getArgs) {
      return Bucket.data.get<Discount & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Discount & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Discount, "_id">) {
      ['foods'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Discount & id) {
      ['foods'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Discount> & id
    ) {
      ['foods'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Discount & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Discount & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Category{
  _id?: string;
  name?: string;
  foods?: (Food & id | string)[];
}
export namespace category {
  const BUCKET_ID = '61bc87901fcf06002dc71f96';
    export function get (...args: getArgs) {
      return Bucket.data.get<Category & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Category & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Category, "_id">) {
      ['foods'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Category & id) {
      ['foods'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Category> & id
    ) {
      ['foods'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Category & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Category & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Address{
  _id?: string;
  title?: string;
  location?: { type: "Point", coordinates: [number,number]};
}
export namespace address {
  const BUCKET_ID = '61bc87901fcf06002dc71f99';
    export function get (...args: getArgs) {
      return Bucket.data.get<Address & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Address & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Address, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Address & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Address> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Address & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Address & id>(BUCKET_ID, ...args);
      };
  }
}

export interface User2{
  _id?: string;
  name?: string;
  surname?: string;
  id_number?: string;
  email?: string;
  phone?: string;
  password?: string;
  birthday?: Date | string;
  address?: { type: "Point", coordinates: [number,number]};
}
export namespace user2 {
  const BUCKET_ID = '61bc95ab1fcf06002dc71fc3';
    export function get (...args: getArgs) {
      return Bucket.data.get<User2 & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<User2 & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<User2, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: User2 & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<User2> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<User2 & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<User2 & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Office{
  _id?: string;
  name?: string;
  location?: { type: "Point", coordinates: [number,number]};
  phone?: string;
  working_hours?: {
  open?: string;
  close?: string;};
}
export namespace office {
  const BUCKET_ID = '61bc96ae1fcf06002dc71fd9';
    export function get (...args: getArgs) {
      return Bucket.data.get<Office & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Office & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Office, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Office & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Office> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Office & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Office & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Category2{
  _id?: string;
  name?: string;
}
export namespace category2 {
  const BUCKET_ID = '61bc96e81fcf06002dc71fe4';
    export function get (...args: getArgs) {
      return Bucket.data.get<Category2 & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Category2 & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Category2, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Category2 & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Category2> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Category2 & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Category2 & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Cars{
  _id?: string;
  name?: string;
  image?: string;
  category?: (Category2 & id | string);
  features?: string[];
  terms?: string[];
  driver_age?: number;
  price?: number;
}
export namespace cars {
  const BUCKET_ID = '61bc97c61fcf06002dc72008';
    export function get (...args: getArgs) {
      return Bucket.data.get<Cars & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Cars & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Cars, "_id">) {
      ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Cars & id) {
      ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Cars> & id
    ) {
      ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Cars & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Cars & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Rent_a_Car{
  _id?: string;
  price?: number;
  user?: (User2 & id | string);
  start?: Date | string;
  end?: Date | string;
  office_to_take?: (Office & id | string);
  office_to_be_given?: (Office & id | string);
  packets?: (Car_Packet & id | string)[];
  additional_products?: (Additional_Products & id | string)[];
}
export namespace rent_a_car {
  const BUCKET_ID = '61bc998e1fcf06002dc7206e';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rent_a_Car & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rent_a_Car & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Rent_a_Car, "_id">) {
      ['user','office_to_take','office_to_be_given','packets','additional_products'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rent_a_Car & id) {
      ['user','office_to_take','office_to_be_given','packets','additional_products'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Rent_a_Car> & id
    ) {
      ['user','office_to_take','office_to_be_given','packets','additional_products'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Rent_a_Car & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Rent_a_Car & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Car_Packet{
  _id?: string;
  name?: string;
  price?: number;
  features?: string[];
}
export namespace car_packet {
  const BUCKET_ID = '61bc9a141fcf06002dc72094';
    export function get (...args: getArgs) {
      return Bucket.data.get<Car_Packet & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Car_Packet & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Car_Packet, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Car_Packet & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Car_Packet> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Car_Packet & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Car_Packet & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Additional_Products{
  _id?: string;
  name?: string;
  price?: number;
  description?: string;
}
export namespace additional_products {
  const BUCKET_ID = '61bc9aaa1fcf06002dc720c6';
    export function get (...args: getArgs) {
      return Bucket.data.get<Additional_Products & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Additional_Products & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Additional_Products, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Additional_Products & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Additional_Products> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Additional_Products & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Additional_Products & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Rent_a_Car_Site_Items{
  _id?: string;
  logo?: string;
  social_media?: {
  name?: string;
  link?: string;}[];
  discount_code?: string;
}
export namespace rent_a_car_site_items {
  const BUCKET_ID = '61bc9c161fcf06002dc720f0';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rent_a_Car_Site_Items & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rent_a_Car_Site_Items & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Rent_a_Car_Site_Items, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rent_a_Car_Site_Items & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Rent_a_Car_Site_Items> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Rent_a_Car_Site_Items & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Rent_a_Car_Site_Items & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Room{
  _id?: string;
  name?: string;
  description?: string;
  head_image?: string;
  images?: string[];
  category?: (Category3 & id | string);
  properties?: (Properties & id | string)[];
}
export namespace room {
  const BUCKET_ID = '619b70235ee9b9002f157fae';
    export function get (...args: getArgs) {
      return Bucket.data.get<Room & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Room & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Room, "_id">) {
      ['category','properties'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Room & id) {
      ['category','properties'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Room> & id
    ) {
      ['category','properties'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Room & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Room & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Rezervasyon{
  _id?: string;
  name?: string;
  mail?: string;
  phone_number?: string;
  check_in?: Date | string;
  check_out?: Date | string;
  room?: (Room & id | string);
  adult?: number;
  children?: number;
}
export namespace rezervasyon {
  const BUCKET_ID = '619cad785ee9b9002f158823';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rezervasyon & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rezervasyon & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Rezervasyon, "_id">) {
      ['room'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rezervasyon & id) {
      ['room'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Rezervasyon> & id
    ) {
      ['room'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Rezervasyon & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Rezervasyon & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Category3{
  _id?: string;
  name?: string;
}
export namespace category3 {
  const BUCKET_ID = '619caebb5ee9b9002f158858';
    export function get (...args: getArgs) {
      return Bucket.data.get<Category3 & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Category3 & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Category3, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Category3 & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Category3> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Category3 & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Category3 & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Site_Configurations{
  _id?: string;
  contact?: {
  adress_map?: { type: "Point", coordinates: [number,number]};
  adress?: string;
  phone_number?: string;
  mail?: string;
  facebook_link?: string;
  instagram_link?: string;};
  homepage?: {
  logo?: string;
  header?: string;
  slides?: string[];};
  site_name?: string;
  about?: string;
}
export namespace site_configurations {
  const BUCKET_ID = '619ca9f25ee9b9002f15879c';
    export function get (...args: getArgs) {
      return Bucket.data.get<Site_Configurations & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Site_Configurations & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Site_Configurations, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Site_Configurations & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Site_Configurations> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Site_Configurations & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Site_Configurations & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Properties{
  _id?: string;
  name?: string;
}
export namespace properties {
  const BUCKET_ID = '61a4aa075ee9b9002f15ae09';
    export function get (...args: getArgs) {
      return Bucket.data.get<Properties & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Properties & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Properties, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Properties & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Properties> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Properties & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Properties & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Activities{
  _id?: string;
  name?: string;
  description?: string;
  images?: string[];
}
export namespace activities {
  const BUCKET_ID = '61a791d75ee9b9002f15c2fa';
    export function get (...args: getArgs) {
      return Bucket.data.get<Activities & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Activities & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Activities, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Activities & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Activities> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Activities & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Activities & id>(BUCKET_ID, ...args);
      };
  }
}