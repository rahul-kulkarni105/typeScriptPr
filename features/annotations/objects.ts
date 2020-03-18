const profile = {
  name: 'rahul',
  age: 29,
  coords: {
    lat: 0,
    lng: 12
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
