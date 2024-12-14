## Database: PostgreSQL & ORM: Prisma

- Small App (Light Load)
  - Concurrent Users: 1-100
  - Memory (RAM): 1-2 GB
  - connection pool size: default (4 connections)
- Medium App (Medium Load)
  - Concurrent Users: 100-1000
  - Memory (RAM): 4-8GB
  - connection pool size: 10-20 connections
- Large App (High Load)
  - Concurrent Users: 1000+ (up to thousands or millions)
  - Memory (RAM): 8+ GB
  - connection pool size: 20+ connections

## Virtual Machine's Security

1. SSH Access

- Disable password-based login to the VM, making it accessible with SSH keys only.
  - Disable password-based login for the root user.
  - Any newly created user have password-based login disabled by default.

2. Firewall
3. Host your app as non-root and non-sudo user
