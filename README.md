![Medusa Hackathon 2022](/medusa.jpg)

# Participants
@bryare

# Description
A rendition of my personal site using medusaJS as a store.

# Preview

![Medusa Hackathon 2022](/preview.png)

# Prerequisites

- Medusa CLI
- Node 16.8

# Set up project

1. First git clone this file

   ```
   git clone https://github.com/bryare/medusa-hackathon.git
   ```
2. Medusa Server on localhost:9000
   <br/>
   
   ```
   npm install @medusajs/medusa-cli -g
   ```
   
   <br/>
   
   ```
   medusa new medusa-server --seed
   ```
   
   <br/>
   
   ```
   
   cd medusa-server
   ```
   
   <br/>
   
   ```
   medusa develop
   ```

3. Medusa Store on localhost:8000
   <br/>
   
   ```
   cd medusa-store
   ```
   
   <br/>
   
   ```
   yarn install
   ```
   
   <br/>
   
   ```
   npm run dev
   ```
   
   ## Resources

   - [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
