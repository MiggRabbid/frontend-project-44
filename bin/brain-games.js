#!/usr/bin/env node
import { getUser } from "../src/computing.js";

const user = getUser();

export { user };