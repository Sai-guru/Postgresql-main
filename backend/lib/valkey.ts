import {Redis} from 'ioredis';

// This connects to my local Arch Valkey service
const valkey = new Redis();

export default valkey;
