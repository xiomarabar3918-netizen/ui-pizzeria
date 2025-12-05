type OrderStatus = 'pending' | 'ready'
type Order = { id: string; product: string; status: OrderStatus }

const mockOrders: Order[] = [
  { id: 'ORD0008', product: 'Producto 1 x1', status: 'pending' },
  { id: 'ORD0009', product: 'Producto 1 x1', status: 'pending' },
  { id: 'ORD0010', product: 'Producto 1 x1', status: 'pending' },
  { id: 'ORD0011', product: 'Producto 1 x1', status: 'pending' },
  { id: 'ORD0012', product: 'Producto 1 x1', status: 'pending' },
  { id: 'ORD0013', product: 'Producto 1 x1', status: 'pending' },
  { id: 'ORD0013', product: 'Producto 1 x1', status: 'ready' },
]

const summary = mockOrders.reduce(
  (acc, order) => {
    acc[order.status] = (acc[order.status] ?? 0) + 1
    return acc
  },
  { pending: 0, ready: 0 } satisfies Record<OrderStatus, number>,
)

const visibleOrders = mockOrders.filter(order => order.status !== 'ready')

export default function CollaboratorTask() {
  return (
    <section className="collaboratorTask">
      <div className="collaboratorTask_header">
        <div>
          <h2 className="collaboratorTask_tittle">Órdenes en cocina</h2>
        </div>
        <div className="collaboratorTask_stats">
          <div className="taskStat taskStatPending">
            <p>
              <span>Órdenes</span>
              <span>Pendientes</span>
            </p>
            <strong>{summary.pending}</strong>
          </div>
          <div className="taskStat taskStatReady">
            <p>
              <span>Órdenes</span>
              <span>Listas</span>
            </p>
            <strong>{summary.ready}</strong>
          </div>
        </div>
      </div>

      <div className="collaboratorTask_grid">
        {visibleOrders.map(order => (
          <article key={order.id} className={`orderCard orderCard${order.status}`}>
            <header className="orderCard_header">
              <div className="NumberOrder">
                <span className="label">Orden N°</span>
                <h3>{order.id}</h3>
              </div>
              <span className={`orderCard__badge orderCard__badge${order.status}`}>
                {order.status === 'pending' ? 'Pendiente' : 'Lista'}
              </span>
            </header>
            <p className="orderCard__product">{order.product}</p>
            <button className="orderCard__action" type="button">
              Orden lista
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
