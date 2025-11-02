import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import type { Id } from '../convex/_generated/dataModel';
import { Button, Skeleton } from 'antd';

interface OrderConfirmationModalProps {
  orderId: string;
  onClose: () => void;
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({ orderId, onClose }) => {
const order = useQuery(
  api.orders.getOrderById,
  orderId ? { orderId: orderId as Id<"orders"> } : "skip"
);


  if (!order) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center max-w-md w-full mx-4">
          <Skeleton active paragraph={{ rows: 4 }} />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center max-w-md w-full mx-4">
        <Image src="/assets/checkout/icon-order-confirmation.svg" alt="Order Confirmed" width={64} height={64} className="mb-6" />
        <h1 className="text-3xl font-bold mb-4">THANK YOU FOR YOUR ORDER</h1>
        <p className="text-black/50 mb-6">You will receive an email confirmation shortly.</p>
        
        <div className="w-full bg-[#F1F1F1] rounded-lg p-4 mb-6">
          <div className="flex flex-col gap-2 border-b border-gray-300 pb-2 mb-2">
            {order.items.map((item, index) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image src={`/assets/cart/image-${item.name.toLowerCase().replace(/ /g, '-')}.jpg`} alt={item.name} width={48} height={48} className="rounded-lg" />
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-black/50 text-sm">$ {item.price.toLocaleString()}</p>
                  </div>
                </div>
                <span className="text-black/50">x{item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-black/50 uppercase">Grand Total</p>
            <p className="text-lg font-bold">$ {order.totals.grandTotal.toLocaleString()}</p>
          </div>
        </div>

        <Link href="/">
          <Button type="primary" size="large" onClick={onClose} className="!bg-[#D87D4A] !hover:bg-[#FBAF85] !text-white !border-none">
            BACK TO HOME
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
