import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDatailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>(`/orders/:orderId`, ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndow@example.com',
      phone: '199187319',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Product 1' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'Product 2' },
        quantity: 2,
      },
    ],
  })
})
