using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace K300.Hubs
{
    public class QuantityHub : Hub
    {
        public async Task MinusQuantity(int quantity)
        {
            await Clients.All.SendAsync("ReceiveMessage", quantity + 1);
        }
    }
}
