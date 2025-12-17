/**
 * The Village Robot Project from Eloquent JavaScript.
 * This file contains the graph representation of the village, the state management,
 * the pathfinding logic, and the simulation runner.
 */

// --- 1. Graph Data and Construction ---

const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bob's House-Town Hall", 
    "Daria's House-Ernie's House", 
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House", 
    "Grete's House-Farm", 
    "Grete's House-Shop",
    "Marketplace-Farm", 
    "Marketplace-Post Office", 
    "Marketplace-Shop",
    "Marketplace-Town Hall", 
    "Shop-Town Hall"
];

/**
 * Converts a list of roads (strings) into a graph data structure (Adjacency List).
 * @param {Array<string>} roads - List of connections ("A-B").
 * @returns {Object<string, Array<string>>} The graph map.
 */
function buildGraph(roads) {
    let graph = Object.create(null);
    for (let [from, to] of roads.map(r => r.split("-"))) {
        // Helper function to add the destination to the current location's list
        function addEdge(from, to) {
            if (graph[from] == null) {
                graph[from] = [to];
            } else {
                graph[from].push(to);
            }
        }
        // Roads are bidirectional
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

// --- 2. State Management ---

/**
 * VillageState class manages the robot's current location and the collection of parcels.
 */
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    /**
     * Moves the robot to the next destination and updates the parcels.
     * @param {string} destination - The target location.
     * @returns {VillageState} A new state object after the move.
     */
    move(destination) {
        // 1. Check if the destination is a valid neighbor
        if (!roadGraph[this.place].includes(destination)) {
            return this; // Cannot move, return the same state
        }

        // 2. Update parcels that the robot is carrying
        let parcels = this.parcels.map(p => {
            // If the robot is carrying the parcel, its location updates to the new destination
            if (p.place != this.place) return p;
            return { place: destination, address: p.address };
        }).filter(p => {
            // Drop-off: keep only parcels that are NOT at their destination address
            return p.place != p.address;
        });

        // 3. Return the new VillageState
        return new VillageState(destination, parcels);
    }

    /**
     * Creates a random initial state with 5 parcels.
     * @param {number} parcelCount - Number of parcels to generate.
     * @returns {VillageState} A random initial state.
     */
    static random(parcelCount = 5) {
        let parcels = [];
        for (let i = 0; i < parcelCount; i++) {
            let place = randomPick(Object.keys(roadGraph));
            // Ensure the address is different from the starting location
            let address;
            do {
                address = randomPick(Object.keys(roadGraph));
            } while (place == address);

            parcels.push({ place, address });
        }
        return new VillageState("Post Office", parcels);
    }
}

/** Helper function to pick a random element from an array. */
function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

// --- 3. Pathfinding Algorithm (Breadth-First Search) ---

/**
 * Finds the shortest route from 'from' to 'to' using Breadth-First Search (BFS).
 * @param {Object} graph - The road graph.
 * @param {string} from - Starting location.
 * @param {string} to - Target location.
 * @returns {Array<string>} The array of steps to take.
 */
function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];
    let visited = new Set();

    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        if (at == to) return route;

        for (let next of graph[at]) {
            if (!visited.has(next)) {
                visited.add(next);
                work.push({ at: next, route: route.concat(next) });
            }
        }
    }
    return null; // Should not happen in a connected graph
}

// --- 4. Robot Implementation ---

/**
 * The core logic for the goal-oriented robot (the optimal solution).
 * @param {VillageState} state - The current state of the simulation.
 * @param {Array<string>} memory - The robot's current cached route.
 * @returns {Object} An object containing the next direction and updated memory.
 */
function goalOrientedRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let targets = parcels.map(p => {
            // If the parcel needs to be picked up, the target is its current location (p.place)
            if (p.place != place) return p.place;
            // If the parcel is carried, the target is its destination address (p.address)
            else return p.address;
        });

        // Find the shortest route to the most urgent target
        let routes = targets.map(target => findRoute(roadGraph, place, target));
        let shortestRoute = routes.reduce((a, b) => (a.length <= b.length ? a : b));
        
        route = shortestRoute;
    }

    return { direction: route[0], memory: route.slice(1) };
}

// --- 5. Simulation Runner ---

/**
 * Runs the simulation for a robot until all parcels are delivered.
 * @param {VillageState} state - The initial state.
 * @param {Function} robot - The robot function (e.g., goalOrientedRobot).
 * @param {Array} memory - The robot's memory (initial route).
 * @returns {number} The total number of steps taken.
 */
function runRobot(state, robot, memory) {
    for (let steps = 0; ; steps++) {
        if (state.parcels.length == 0) {
            console.log(`✅ Finished in ${steps} steps.`);
            return steps;
        }

        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}
// --- 6. Execution / Test Case ---
console.log("--- Starting Robot Simulation (Goal-Oriented) ---");
// Generate a random scenario
let initialState = VillageState.random(5);
console.log(`Initial Parcels: ${initialState.parcels.length}`);
console.log(`Starting Place: ${initialState.place}`)
// Run the goal-oriented robot
runRobot(initialState, goalOrientedRobot, []);
// Example of the simple, non-efficient robot from the book (for comparison)
// const mailRoute = [
//     "Alice's House", "Cabin", "Alice's House", "Bob's House",
//     "Town Hall", "Daria's House", "Ernie's House", "Grete's House",
//     "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"
// ];
// function routeRobot(state, route) {
//     if (route.length == 0) {
//         route = mailRoute;
//     }
//     return { direction: route[0], memory: route.slice(1) };
// }
// console.log("\n--- Starting Robot Simulation (Fixed Route) ---");
// runRobot(initialState, routeRobot, []);











// /**
//  * Robot Comparison Project: Compares the efficiency of two robot strategies
//  * by running them on 100 identical, randomly generated tasks.
//  */

// // --- 1. Graph Data and Construction (REQUIRED FOR RUNNING) ---

// const roads = [
//     "Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office",
//     "Bob's House-Town Hall", "Daria's House-Ernie's House", "Daria's House-Town Hall",
//     "Ernie's House-Grete's House", "Grete's House-Farm", "Grete's House-Shop",
//     "Marketplace-Farm", "Marketplace-Post Office", "Marketplace-Shop",
//     "Marketplace-Town Hall", "Shop-Town Hall"
// ];

// function buildGraph(roads) {
//     let graph = Object.create(null);
//     for (let [from, to] of roads.map(r => r.split("-"))) {
//         function addEdge(from, to) {
//             if (graph[from] == null) {
//                 graph[from] = [to];
//             } else {
//                 graph[from].push(to);
//             }
//         }
//         addEdge(from, to);
//         addEdge(to, from);
//     }
//     return graph;
// }

// const roadGraph = buildGraph(roads);

// function randomPick(array) {
//     let choice = Math.floor(Math.random() * array.length);
//     return array[choice];
// }

// // --- 2. State Management (REQUIRED FOR RUNNING) ---

// class VillageState {
//     constructor(place, parcels) {
//         this.place = place;
//         this.parcels = parcels;
//     }

//     move(destination) {
//         if (!roadGraph[this.place].includes(destination)) {
//             return this;
//         }

//         let parcels = this.parcels.map(p => {
//             if (p.place != this.place) return p;
//             return { place: destination, address: p.address };
//         }).filter(p => {
//             return p.place != p.address;
//         });

//         return new VillageState(destination, parcels);
//     }

//     // Static method to create a random starting scenario
//     static random(parcelCount = 5) {
//         let parcels = [];
//         for (let i = 0; i < parcelCount; i++) {
//             let place = randomPick(Object.keys(roadGraph));
//             let address;
//             do {
//                 address = randomPick(Object.keys(roadGraph));
//             } while (place == address);
//             parcels.push({ place, address });
//         }
//         return new VillageState("Post Office", parcels);
//     }
// }

// // --- 3. Pathfinding (REQUIRED FOR goalOrientedRobot) ---

// function findRoute(graph, from, to) {
//     let work = [{ at: from, route: [] }];
//     let visited = new Set();
    
//     for (let i = 0; i < work.length; i++) {
//         let { at, route } = work[i];
//         if (at == to) return route;

//         for (let next of graph[at]) {
//             if (!visited.has(next)) {
//                 visited.add(next);
//                 work.push({ at: next, route: route.concat(next) });
//             }
//         }
//     }
//     return null;
// }


// // --- 4. Robot Functions ---

// const mailRoute = [
//     "Alice's House", "Cabin", "Alice's House", "Bob's House",
//     "Town Hall", "Daria's House", "Ernie's House", "Grete's House",
//     "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"
// ];

// // Robot 1: The simple, fixed-route robot
// function routeRobot(state, route) {
//     if (route.length == 0) {
//         route = mailRoute;
//     }
//     return { direction: route[0], memory: route.slice(1) };
// }

// // Robot 2: The goal-oriented, pathfinding robot (most efficient)
// function goalOrientedRobot({ place, parcels }, route) {
//     if (route.length == 0) {
//         let targets = parcels.map(p => {
//             return p.place != place ? p.place : p.address;
//         });

//         let routes = targets.map(target => findRoute(roadGraph, place, target));
//         let shortestRoute = routes.reduce((a, b) => (a.length <= b.length ? a : b));
        
//         route = shortestRoute;
//     }

//     return { direction: route[0], memory: route.slice(1) };
// }

// // --- 5. Simulation Runner (REQUIRED FOR COMPARISON) ---

// /**
//  * Runs the simulation for a robot until all parcels are delivered.
//  * @param {VillageState} state - The initial state.
//  * @param {Function} robot - The robot function.
//  * @param {Array} memory - The robot's current memory/route.
//  * @returns {number} The total number of steps taken.
//  */
// function runRobot(state, robot, memory) {
//     for (let steps = 0; ; steps++) {
//         if (state.parcels.length == 0) {
//             return steps;
//         }

//         let action = robot(state, memory);
//         state = state.move(action.direction);
//         memory = action.memory;
//     }
// }

// // --- 6. The Solution Function ---

// /**
//  * Compares two robots over 100 randomly generated tasks.
//  * @param {Function} robot1 - The first robot function.
//  * @param {Array} memory1 - The starting memory for robot 1.
//  * @param {Function} robot2 - The second robot function.
//  * @param {Array} memory2 - The starting memory for robot 2.
//  */
// function compareRobots(robot1, memory1, robot2, memory2) {
//     const totalTasks = 100;
//     let totalSteps1 = 0;
//     let totalSteps2 = 0;

//     console.log(`\n--- Running Simulation: ${totalTasks} Tasks ---`);

//     // 1. Generate 100 identical tasks
//     const tasks = [];
//     for (let i = 0; i < totalTasks; i++) {
//         // Generate a new, random starting state with 5 parcels
//         tasks.push(VillageState.random(5));
//     }

//     // 2. Run Robot 1 on all tasks
//     for (const task of tasks) {
//         // We must pass a fresh copy of memory for each task
//         // We pass the task state (which contains the parcels) and robot function
//         totalSteps1 += runRobot(task, robot1, [...memory1]); 
//     }

//     // 3. Run Robot 2 on all tasks
//     for (const task of tasks) {
//         // We run on the *exact same* task states
//         totalSteps2 += runRobot(task, robot2, [...memory2]); 
//     }

//     // 4. Calculate and display averages
//     const avgSteps1 = totalSteps1 / totalTasks;
//     const avgSteps2 = totalSteps2 / totalTasks;

//     console.log(`\nRobot 1 (Fixed Route) required ${avgSteps1.toFixed(2)} steps per task.`);
//     console.log(`Robot 2 (Goal Oriented) required ${avgSteps2.toFixed(2)} steps per task.`);
// }

// // --- Execution ---

// // We must wrap the first robot in an anonymous function if we want to give it a custom name in the output
// compareRobots(routeRobot, [], goalOrientedRobot, []);




// /**
//  * PGroup Class: A persistent version of the Group class.
//  * All modifying methods (add, delete) return a NEW PGroup instance,
//  * leaving the original instance immutable.
//  */
// class PGroup {
//     /**
//      * The constructor is intended for internal use only.
//      * It takes an array of members, which should NEVER be modified directly.
//      * @param {Array<any>} members - The array of members for this specific group state.
//      */
//     constructor(members) {
//         this.members = members;
//     }

//     /**
//      * Returns a new PGroup instance with the given value added.
//      * Leaves the current PGroup instance unchanged.
//      * @param {any} value - The value to add.
//      * @returns {PGroup} A new PGroup instance.
//      */
//     add(value) {
//         if (this.has(value)) {
//             // Value is already present, return the current, unchanged group
//             return this;
//         }
//         // Return a new PGroup instance using a copy of the old members plus the new value
//         return new PGroup(this.members.concat([value]));
//     }

//     /**
//      * Returns a new PGroup instance without the given value.
//      * Leaves the current PGroup instance unchanged.
//      * @param {any} value - The value to delete.
//      * @returns {PGroup} A new PGroup instance.
//      */
//     delete(value) {
//         if (!this.has(value)) {
//             // Value is not present, return the current, unchanged group
//             return this;
//         }
//         // Return a new PGroup instance using a filtered copy of the old members
//         return new PGroup(this.members.filter(m => m !== value));
//     }

//     /**
//      * Checks if the group contains the given value.
//      * @param {any} value - The value to check for.
//      * @returns {boolean} True if the value is a member, false otherwise.
//      */
//     has(value) {
//         return this.members.includes(value);
//     }

//     // --- Static Property for the starting state ---
//     // The empty instance is created and attached directly to the class.
//     static empty = new PGroup([]);
// }

// // --- Demonstration ---

// // PGroup.empty is the starting point
// let a = PGroup.empty.add("a");      // a is { members: ["a"] }
// let ab = a.add("b");                // ab is { members: ["a", "b"] }
// let b = ab.delete("a");             // b is { members: ["b"] }
// let c = b.add("c").delete("b");     // c is { members: ["c"] }

// console.log("--- Testing PGroup Instances ---");

// // Test 1: Check the final state 'b'
// console.log(`b.has("b"): ${b.has("b")}`); // → true
// console.log(`b.has("a"): ${b.has("a")}`); // → false

// // Test 2: Check the persistent intermediate state 'a' (it must be unchanged)
// console.log(`a.has("b"): ${a.has("b")}`); // → false
// console.log(`a.has("a"): ${a.has("a")}`); // → true

// // Test 3: Check the initial state is still empty
// console.log(`PGroup.empty.has("a"): ${PGroup.empty.has("a")}`); // → false

// console.log("\n--- Comparison of Members ---");
// console.log(`a members: ${a.members}`);
// console.log(`ab members: ${ab.members}`);
// console.log(`b members: ${b.members}`);







// /**
//  * Efficient Robot Comparison: Introduces the improved 'efficientRobot'
//  * which addresses the greedy flaw of the original goalOrientedRobot.
//  */

// // --- 1. Graph Data and State Management (Context from previous steps) ---
// const roads = [
//     "Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office",
//     "Bob's House-Town Hall", "Daria's House-Ernie's House", "Daria's House-Town Hall",
//     "Ernie's House-Grete's House", "Grete's House-Farm", "Grete's House-Shop",
//     "Marketplace-Farm", "Marketplace-Post Office", "Marketplace-Shop",
//     "Marketplace-Town Hall", "Shop-Town Hall"
// ];

// function buildGraph(roads) {
//     let graph = Object.create(null);
//     for (let [from, to] of roads.map(r => r.split("-"))) {
//         function addEdge(from, to) {
//             if (graph[from] == null) { graph[from] = [to]; } else { graph[from].push(to); }
//         }
//         addEdge(from, to);
//         addEdge(to, from);
//     }
//     return graph;
// }

// const roadGraph = buildGraph(roads);

// function randomPick(array) {
//     let choice = Math.floor(Math.random() * array.length);
//     return array[choice];
// }

// class VillageState {
//     constructor(place, parcels) {
//         this.place = place;
//         this.parcels = parcels;
//     }
//     move(destination) {
//         if (!roadGraph[this.place].includes(destination)) return this;
//         let parcels = this.parcels.map(p => {
//             if (p.place != this.place) return p;
//             return { place: destination, address: p.address };
//         }).filter(p => p.place != p.address);
//         return new VillageState(destination, parcels);
//     }
//     static random(parcelCount = 5) {
//         let parcels = [];
//         for (let i = 0; i < parcelCount; i++) {
//             let place = randomPick(Object.keys(roadGraph));
//             let address;
//             do {
//                 address = randomPick(Object.keys(roadGraph));
//             } while (place == address);
//             parcels.push({ place, address });
//         }
//         return new VillageState("Post Office", parcels);
//     }
// }

// // --- 2. Pathfinding and Simulation Runner ---

// function findRoute(graph, from, to) {
//     let work = [{ at: from, route: [] }];
//     let visited = new Set();
    
//     for (let i = 0; i < work.length; i++) {
//         let { at, route } = work[i];
//         if (at == to) return route;

//         for (let next of graph[at]) {
//             if (!visited.has(next)) {
//                 visited.add(next);
//                 work.push({ at: next, route: route.concat(next) });
//             }
//         }
//     }
//     return null;
// }

// function runRobot(state, robot, memory) {
//     for (let steps = 0; ; steps++) {
//         if (state.parcels.length == 0) return steps;
//         let action = robot(state, memory);
//         state = state.move(action.direction);
//         memory = action.memory;
//     }
// }

// // --- 3. Robots for Comparison ---

// // The original, slightly flawed robot
// function goalOrientedRobot({ place, parcels }, route) {
//     if (route.length == 0) {
//         let targets = parcels.map(p => p.place != place ? p.place : p.address);
        
//         let routes = targets.map(target => findRoute(roadGraph, place, target));
//         let shortestRoute = routes.reduce((a, b) => (a.length <= b.length ? a : b));
        
//         route = shortestRoute;
//     }
//     return { direction: route[0], memory: route.slice(1) };
// }

// // The new, improved robot
// function efficientRobot({ place, parcels }, route) {
//     if (route.length == 0) {
//         // Separate targets: pick-ups are more urgent than drop-offs (usually)
//         let pickups = parcels.filter(p => p.place != place);
//         let deliveries = parcels.filter(p => p.place == place);
        
//         // 1. Prioritize deliveries first, as the robot is already carrying them.
//         let targets = deliveries.map(p => ({
//             target: p.address,
//             priority: 0 // Highest priority
//         }));
        
//         // 2. Add pickups next.
//         targets = targets.concat(pickups.map(p => ({
//             target: p.place,
//             priority: 1 // Lower priority
//         })));
        
//         let bestRoute = null;
//         let bestPriority = Infinity;

//         // Iterate through all possible goals and find the shortest path to the highest priority one.
//         for (let { target, priority } of targets) {
//             let currentRoute = findRoute(roadGraph, place, target);

//             // If a route has a higher priority (lower number) OR
//             // If the priorities are equal AND the route is shorter, select it.
//             if (currentRoute && 
//                 (priority < bestPriority || 
//                 (priority === bestPriority && currentRoute.length < bestRoute.length))) {
                
//                 bestRoute = currentRoute;
//                 bestPriority = priority;
//             }
//         }
//         route = bestRoute;
//     }

//     return { direction: route[0], memory: route.slice(1) };
// }


// // --- 4. The Comparison Function (The Metric) ---

// function compareRobots(robot1, memory1, robot2, memory2) {
//     const totalTasks = 100; // Increased to 100 for better statistical significance
//     let totalSteps1 = 0;
//     let totalSteps2 = 0;

//     console.log(`\n--- Running Simulation: ${totalTasks} Tasks ---`);

//     const tasks = [];
//     for (let i = 0; i < totalTasks; i++) {
//         tasks.push(VillageState.random(5)); // 5 parcels per task
//     }

//     // Robot 1 Run
//     for (const task of tasks) {
//         totalSteps1 += runRobot(task, robot1, [...memory1]); 
//     }

//     // Robot 2 Run
//     for (const task of tasks) {
//         totalSteps2 += runRobot(task, robot2, [...memory2]); 
//     }

//     const avgSteps1 = totalSteps1 / totalTasks;
//     const avgSteps2 = totalSteps2 / totalTasks;

//     console.log(`\nOriginal Goal-Oriented Robot: ${avgSteps1.toFixed(2)} steps per task.`);
//     console.log(`Improved Efficient Robot: ${avgSteps2.toFixed(2)} steps per task.`);
// }

// // --- 5. Execution ---

// // Compare the original goalOrientedRobot against the new efficientRobot
// compareRobots(goalOrientedRobot, [], efficientRobot, []);