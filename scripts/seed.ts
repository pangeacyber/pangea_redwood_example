import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.UserExampleCreateArgs['data'][] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },
    ]

    const posts = [
      {
        title: 'Welcome to the blog!',
        body: "I'm so excited to start my blog and share my thoughts and musings with all of you. I'll be posting on a variety of topics, ranging from lifestyle to current events. Stay tuned for new posts!",
      },
      {
        title: 'A little more about me',
        body: `Making millions may seem like an impossible feat, but it's actually not as hard as you might think. Here are some tips on how to make millions:



        1. Invest in yourself.



        One of the best ways to make millions is to invest in yourself. This could mean taking courses, attending seminars, or investing in your own education. By investing in yourself, you are increasing your chances of making more money.



        2. Invest in others.



        Another way to make millions is to invest in others. This could be done by investing in their businesses, or by helping them to grow their own businesses. By investing in others, you are helping to create more millionaires, and you may even get a percentage of their profits.



        3. Be patient.



        Making millions takes time. It is not something that is going to happen overnight. You need to be patient and be willing to work hard to achieve your goals.



        4. Have faith.



        Finally, you need to have faith. Faith in yourself, faith in your ability to make millions, and faith in the fact that you will achieve your goals. If you don't have faith, you will never achieve your dreams.



        Making millions is possible, but it takes time, effort, and faith. If you have these things, you will be well on your way to making your first million.`,
      },
      {
        title: 'What is the meaning of life?',
        body: `1. What is the meaning of life?



        2. Why are we here?



        3. What is the point of it all?



        These are all profound questions that have been asked throughout history. And while there may not be one, clear answer, they are all worth considering.



        The meaning of life is a question that has been asked by philosophers, religious leaders, and regular people for centuries. There is no one right answer, but it is a question worth pondering.



        We are here for a reason. Whether that reason is to learn and grow, or to serve a greater purpose, is up for debate. But what is important is that we try to figure out what our purpose is.



        The point of it all may not be clear, but that doesn't mean we shouldn't strive to make our lives meaningful. We can do this by living with intention, being kind to others, and making a positive impact on the world.`,
      },
    ]

    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      posts.map(async (post) => {
        const newPost = await db.post.create({
          data: { title: post.title, body: post.body },
        })
        console.log(newPost)
      })
    )

    Promise.all(
      data.map(async (data: Prisma.UserExampleCreateArgs['data']) => {
        const record = await db.userExample.create({ data })
        console.log(record)
      })
    )

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
