<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add user</button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="person in people" :key="person.email">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ person.name }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.title }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.email }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.role }}</td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                  >Edit<span class="sr-only">, {{ person.name }}</span></a
                  >
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Ella Harper', title: 'Back-end Developer', email: 'ella.harper@example.com', role: 'Admin' },
  { name: 'Jayden Lee', title: 'Product Designer', email: 'jayden.lee@example.com', role: 'Member' },
  { name: 'Amelia Martin', title: 'Project Manager', email: 'amelia.martin@example.com', role: 'Contributor' },
  { name: 'Mason Heaney', title: 'QA Analyst', email: 'mason.heaney@example.com', role: 'Admin' },
  { name: 'Nora Smith', title: 'Front-end Developer', email: 'nora.smith@example.com', role: 'Member' },
  { name: 'Oliver Ross', title: 'Back-end Developer', email: 'oliver.ross@example.com', role: 'Contributor' },
  { name: 'Isabella Johnson', title: 'Product Designer', email: 'isabella.johnson@example.com', role: 'Member' },
  { name: 'Sophia Williams', title: 'Project Manager', email: 'sophia.williams@example.com', role: 'Admin' },
  { name: 'Jacob Moore', title: 'QA Analyst', email: 'jacob.moore@example.com', role: 'Contributor' },
  { name: 'Ava Davisntest', title: 'Front-end Developer', email: 'ava.davis@example.com', role: 'Admin' },
  { name: 'William Garcia', title: 'Back-end Developer', email: 'william.garcia@example.com', role: 'Member' },
  { name: 'Mia Rodriguez', title: 'Product Designer', email: 'mia.rodriguez@example.com', role: 'Contributor' },
  { name: 'James Wilson', title: 'Project Manager', email: 'james.wilson@example.com', role: 'Admin' },
  { name: 'Charlotte Brown', title: 'QA Analyst', email: 'charlotte.brown@example.com', role: 'Member' },
  { name: 'Benjamin Anderson', title: 'Front-end Developer', email: 'benjamin.anderson@example.com', role: 'Admin' },
  { name: 'Harper Thomas', title: 'Back-end Developer', email: 'harper.thomas@example.com', role: 'Contributor' },
  { name: 'Lucas White', title: 'Product Designer', email: 'lucas.white@example.com', role: 'Member' },
  { name: 'Elijah Harris', title: 'Project Manager', email: 'elijah.harris@example.com', role: 'Admin' },
  { name: 'Grace Clark', title: 'QA Analyst', email: 'grace.clark@example.com', role: 'Contributor' },
  { name: 'Logan Lewis', title: 'Front-end Developer', email: 'logan.lewis@example.com', role: 'Member' },
  { name: 'Sophie Walker', title: 'Back-end Developer', email: 'sophie.walker@example.com', role: 'Admin' },
  { name: 'Aiden Hall', title: 'Product Designer', email: 'aiden.hall@example.com', role: 'Contributor' },
  { name: 'Olivia Allen', title: 'Project Manager', email: 'olivia.allen@example.com', role: 'Admin' },
  { name: 'Ethan Young', title: 'QA Analyst', email: 'ethan.young@example.com', role: 'Member' },
  { name: 'Chloe King', title: 'Front-end Developer', email: 'chloe.king@example.com', role: 'Contributor' },
  { name: 'Daniel Wright', title: 'Back-end Developer', email: 'daniel.wright@example.com', role: 'Admin' },
  { name: 'Emily Scott', title: 'Product Designer', email: 'emily.scott@example.com', role: 'Member' },
  { name: 'Matthew Green', title: 'Project Manager', email: 'matthew.green@example.com', role: 'Contributor' },
  { name: 'Avery Adams', title: 'QA Analyst', email: 'avery.adams@example.com', role: 'Admin' }
];
</script>
