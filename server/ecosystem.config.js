module.exports = {
    apps: [
        {
        name: "inventory_management",
        script: "npm",
        args: "run dev",
        env: {
            NODE_ENV: "development",
            ENV_VAR1: "environment-variable",
        }
        }
    ]
}