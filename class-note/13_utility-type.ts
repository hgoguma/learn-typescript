// 유틸리티 타입 
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
  something: object;
}

// 1. 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {
//   //..
// }

// Product 인터페이스 중 특정 속성만 필요한 경우
// 이미 정의 되어 있는 인터페이스에서 일부만 뽑기

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id'|'name'|'price'>
function displayProductDetail(shoppingItem: ShoppingItem) { 
}

// Omit : 특정 속성만 빼기
// Partial : 인터페이스의 속성을 모두 다 옵셔널 처리
type UpdateProduct = Partial<Product>
// 3. 특정 정보를 업데이트(갱신) 하는 함수 (필요 속성만 업데이트할 때)
function updateProductItem(productItem: UpdateProduct) {
}

// 4. 유틸리티 타입 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// 별도로 인터페이스를 선언하지 않고 이미 선언한 인터페이스를 통해 구현 가능
// #1 타입 새로 정의
type UserProfileUpdate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

// #2 맵드타입1 (1번의 3줄을 1줄로 줄임)
type UserProfileUpdate2 = {
  // 반복문
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}

type UserProfileKeys = keyof UserProfile

// #3 맵드타입2 (2번 축약)
type UserProfileUpdate3 = {
  [p in keyof UserProfile]?: UserProfile[p]
}

// #4 Partial 구현체 (UserProfile에 대해 제네릭 사용)
type Partial2<T> = {
  [p in keyof T]?: T[p]
}