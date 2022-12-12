const Club = class {
    constructor(id, since, capacity, NBsubscribers, address) {
      this.id=id;
      this.since = since;
      this.capacity = capacity;
      this.NBsubscribers = NBsubscribers;
      this.address=address;
    }

    remainingPlaces() {
      return this.capacity-this.NBsubscribers;
    }
  };
  